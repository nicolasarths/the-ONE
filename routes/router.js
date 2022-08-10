import fs from 'fs'

const pagesRoute = './pages/'

function home(req, res){
    res.writeHead(200, { 'content-type': 'text/html' })
    fs.createReadStream(`${pagesRoute}index.html`).pipe(res)
}

function api(req, res){
    res.writeHead(200, { 'content-type': 'application/json' })
    fs.createReadStream(`${pagesRoute}api/index.json`).pipe(res)
}

function notfound(req, res){
    res.writeHead(200, { 'content-type': 'text/html' })
    fs.createReadStream(`${pagesRoute}notfound.html`).pipe(res)
}

export default function router(req, res){
    const url = req.url

    if (url == '/') return home(req, res)
    else if (url == '/api') return api(req, res)
    else return notfound(req, res)
}