import { Block, Database } from "../model"
import responses from "./responses"

export default function RequestHandler(request){
    if (request.method == 'create') return createRequest(request.model)
    if (request.method == 'read') return readRequest(request.model)
}

// CREATE
function createRequest(model) {
    Database.store(new Block())
    return responses.success
}


// READ
function readRequest(model){
    if (model.type == 'board') return getBoard(model.specs)
}


// ACCESSORIES
function getBoard(specs){
    const boardTitle = specs.title.toLowerCase()
    if (boardTitle == 'dashboard') return getDashboard(specs)
    else return nonExistantBoard(specs)
}

function nonExistantBoard (specs) {
    return {
        board: specs.title,
        error: 1
    }
}

function getDashboard(specs) {
    const title = specs.title

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