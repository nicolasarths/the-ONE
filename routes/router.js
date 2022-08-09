import fs from 'fs'

function home(req, res){
    res.writeHead(200, { 'content-type': 'text/html' })
    fs.createReadStream('./pages/index.html').pipe(res)
}

function api(req, res){
    res.writeHead(200, { 'content-type': 'application/json' })
    fs.createReadStream('./pages/api/index.json').pipe(res)
}

function notfound(req, res){
    res.writeHead(200, { 'content-type': 'text/html' })
    fs.createReadStream('./pages/notfound.html').pipe(res)
}

export default function router(req, res){
    const url = req.url

    if (url == '/') return home(req, res)
    else if (url == '/api') return api(req, res)
    else return notfound(req, res)
}