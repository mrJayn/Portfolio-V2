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
    let res = {}
    let table = []
    for (const folder of test) {
        const subfolder = path.join(contentDirectory, folder)
        let files = await readdir(subfolder)
        for (const file of files) {
            const id = file.replace(/\.md$/, '')
            const filePath = path.join(subfolder, file)
            const fileContent = fs.readFileSync(filePath, 'utf-8')
            const { data, content } = matter(fileContent)

            const contentHTML = (
                await remark().use(html).process(content)
            ).toString()

            table.push({
                folder: folder,
                id: id,
                data: data,
                content: contentHTML,
            })
        }
    }

    res['about'] = table
        .filter((x) => x.folder == 'text')
        .filter((y) => y.id == 'about')[0]
    res['experience'] = table
        .filter((x) => x.folder == 'text')
        .filter((y) => y.id == 'experience')[0]
    res['projects'] = table
        .filter((x) => x.folder == 'text')
        .filter((y) => y.id == 'projects')[0]
    res['featured_data'] = table.filter((x) => x.folder == 'featured_data')
    res['projects_data'] = table.filter((x) => x.folder == 'projects_data')

    return res
}

//=================================================
export async function getSectionMarkdown(slug) {
    slug = slug.toLowerCase()

    if (slug !== 'projects') {
        const sectionPath = path.join(contentDirectory, 'text', slug + '.md')
        const sectionContent = fs.readFileSync(sectionPath, 'utf-8')
        const { data, content } = matter(sectionContent)
        const contentHTML = (
            await remark().use(html).process(content)
        ).toString()
        return {
            id: slug,
            data: data,
            content: contentHTML,
        }
    } else {
        const data = await getAllMarkdown()
        return {
            id: slug,
            description: data.projects.data.description,
            projects: data.projects,
            featuredData: data.featured_data,
            projectsData: data.projects_data,
        }
    }
}

//=================================================
