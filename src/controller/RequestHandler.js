import { Block, Database } from "../model"
import responses from "./responses"

function format(req){
    if (typeof(req) == 'string') req = JSON.parse(req)
    if (req.params) return {
        method: 'read',
        type: req.params.type,
        title: req.params.boardTitle
    }
    return req
}

export default class RequestHandler {
    static create (req) { return createRequest(req)}
    static read (req) {

        return readRequest(req)
    }
    
    static handle(req) {
        req = format(req)
        if (req.method == 'create') return RequestHandler.create(req)
        if (req.method == 'read') return RequestHandler.read(req)
    }
}

// CREATE
function createRequest(req) {
    Database.store(new Block())
    return responses.success
}


// READ
function readRequest(req){
    if (req.type == 'board') {
        return getBoard(req)
    }
}


// ACCESSORIES
function getBoard(req){
    const boardTitle = req.title.toLowerCase()
    if (boardTitle == 'dashboard') return getDashboard(req)
    else return nonExistantBoard(req)
}

function nonExistantBoard (req) {
    return {
        error: "Board doesn't exist"
    }
}

function getDashboard(req) {
    const title = req.title

    const dashboard = {
        board: title,
        grid: [
            [],
            [],
            []
        ]
    }
    
    const retrievedInfo = Database.retrieve()
    if (retrievedInfo.length > 0) dashboard.grid = equallyDistribute(retrievedInfo, dashboard.grid)

    return dashboard
}



function equallyDistribute(items, stacks){
    let resolvedStacks = []
    for (let i = 0; i < stacks.length; i++) {
        resolvedStacks[i] = [...stacks[i]];
    }
    
    let j = 0
    items.forEach( (item) => {
        resolvedStacks[j].push(item)
        j++
        if (j==stacks.length) j=0
    })

    return resolvedStacks
}