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

export async function getMarkdown() {
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
    res['featured'] = table.filter((x) => x.folder == 'featured')
    res['projects'] = table.filter((x) => x.folder == 'projects')

    return res
}
