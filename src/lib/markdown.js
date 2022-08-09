import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import { readdir } from 'fs/promises'

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
    let res = []
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
    res['text'] = table.filter((x) => x.folder == 'text')
    res['featured'] = table.filter((x) => x.folder == 'featured')
    res['projects'] = table.filter((x) => x.folder == 'projects')

    return res
}
