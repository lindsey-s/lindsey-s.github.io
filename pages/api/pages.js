import fs from 'fs'
import path from 'path'

function pagesResponse(contents) {
    let pages = []
    contents.forEach(function(item) { 
        if (!item.includes('.js') || item.includes('_')) {
            return // don't pages for directories nor required _app.js file
        }
        pages.push(formatPage(item))
    })
    return pages
}

function formatPage(filename) {
    if (filename.includes('index')) {
        return { path: '/', title: 'Home' }
    } else {
        let name = filename.replace('.js', '')
        return { path: `/${name}`, title: name.charAt(0).toUpperCase() + name.slice(1) }
    }
}

export default function handler(req, res) {
    const routes = fs.readdirSync(path.basename('/pages/'))

    return res.status(200).json({ pages: pagesResponse(routes) })
}


