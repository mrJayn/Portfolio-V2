import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import { readdir } from 'fs/promises'
const fs = require('fs'),
    path = require('path'),
    cwd = process.cwd()
// Static Directories
const contentDir = path.join(cwd, 'src/content'),
    projectsDir = path.join(cwd, 'src/content/projects'),
    featuredDir = path.join(cwd, 'src/content/featured')
// Recycled - Formatters, Filters or Maps
const file2key = (file) => String(file.replace(/\.md$/, ''))
const isFolder = (dirent) => dirent.isDirectory()
const isFile = (dirent) => dirent.name.includes('.md')
const toName = (dirent) => dirent.name
// Filter the children of 'src/content' , into files or folders
function getDirectories(dirname) {
    const all = fs.readdirSync(dirname, { withFileTypes: true })
    return {
        folders: all.filter(isFolder).map(toName),
        files: all.filter(isFile).map(toName),
    }
}
// Return object containing:  [data]  /  (optional) remarked html
async function remarkMatter(file, containerPath) {
    const filePath = path.join(containerPath, file)
    const fileRaw = fs.readFileSync(filePath, 'utf-8')
    const { data, content } = matter(fileRaw)
    const HTML = await remark()
        .use(html)
        .process(content)
        .then((res) => res.value)
    return {
        ...(HTML ? { content: HTML } : {}),
        ...data,
    }
}

// =================================================== //
export async function getAllMarkdown() {
    const { files, folders } = getDirectories(contentDir)
    var res = {}
    // 1 - top level files
    for (const file of files) {
        const info = await remarkMatter(file, contentDir)
        res[file2key(file)] = { ...info }
    }
    // 2 - subfolders files
    for (const folder of folders) {
        const folderPath = path.join(contentDir, folder)
        const folderFiles = await readdir(folderPath)
        res[folder] = {}
        for (const file of folderFiles) {
            const info = await remarkMatter(file, folderPath)
            res[folder][file2key(file)] = { ...info }
        }
    }
    return res
}

// =================================================== //
export async function getHomeProps() {
    const { files } = getDirectories(contentDir)
    var res = { featured: {} }
    for (const file of files) {
        const info = await remarkMatter(file, contentDir)
        res[file2key(file)] = { ...info }
    }
    const featuredFiles = await readdir(featuredDir)
    for (const file of featuredFiles) {
        const info = await remarkMatter(file, featuredDir)
        res['featured'][file2key(file)] = { ...info }
    }
    return res
}

// =================================================== //
export async function getProjectsProps() {
    const files = await readdir(projectsDir)
    var res = {}
    for (const file of files) {
        const info = await remarkMatter(file, projectsDir)
        res[file2key(file)] = { ...info }
    }
    return res
}
