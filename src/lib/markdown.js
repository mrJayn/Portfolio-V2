import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import { readdir } from 'fs/promises'
const fs = require('fs')
const path = require('path')

const contentDirectory = path.join(process.cwd(), 'src/content')

export function getDirectories(dirname) {
    return fs
        .readdirSync(dirname, { withFileTypes: true })
        .filter((dirent) => dirent.isDirectory())
        .map((dirent) => dirent.name)
}
// =================================================

export async function getAllMarkdown() {
    const test = getDirectories(contentDirectory)
    let temp = {}
    let res = {}

    for (const folder of test) {
        const subfolder = path.join(contentDirectory, folder)
        let files = await readdir(subfolder)

        temp[folder] = {}

        for (const file of files) {
            const id = file.replace(/\.md$/, '')

            const filePath = path.join(subfolder, file)
            const fileContent = fs.readFileSync(filePath, 'utf-8')
            const { data, content } = matter(fileContent)

            const contentHTML = (
                await remark().use(html).process(content)
            ).toString()

            temp[folder][id] = {
                id: id,
                data: data,
                content: contentHTML,
            }
        }
    }

    res['intro'] = { id: 'intro' }
    res['about'] = temp.text.about
    res['experience'] = temp.text.experience
    res['projects'] = {
        ...temp.text.projects,
        featured: temp.featured,
        projects: temp.projects,
    }
    res['contact'] = { id: 'contact' }

    return res
}

//=================================================
export async function getSectionMarkdown(sid) {
    if (sid === 'projects') {
        const { projects } = await getAllMarkdown()
        return {
            id: sid,
            data: projects.data,
            featuredData: projects.featured,
            projectsData: projects.projects,
        }
    } else {
        const sectionPath = path.join(contentDirectory, 'text', sid + '.md')
        const sectionContent = fs.readFileSync(sectionPath, 'utf-8')
        const { data, content } = matter(sectionContent)
        const contentHTML = (
            await remark().use(html).process(content)
        ).toString()
        return {
            id: sid,
            data: data,
            content: contentHTML,
        }
    }
}

//=================================================
