import { Block, Database } from "../model"
import responses from "./responses"

export default function RequestHandler(req){
    if (req.method == 'create') return createRequest(req.model)
    if (req.method == 'read') return readRequest(req)
}

function createRequest(model) {
    Database.store(new Block())
    return responses.success
}

function nonExistantBoard (req) {
    return {
        board: req.model.specs.title,
        error: 1
    }
}

function getDashboard(req) {
    const title = req.model.specs.title

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

function readRequest(req){
    const titleOfBoardRequest = req.model.specs.title.toLowerCase()
    if (titleOfBoardRequest == 'dashboard') return getDashboard(req)
    else return nonExistantBoard(req)
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