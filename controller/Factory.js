import { Database, Block } from "../model"

function createBlock(specs){
    const block = new Block()
    block.title = specs.title
    block.content = specs.content
    Database.store(block)
}

export default class Factory {
    static create(model){
        const blockRequest = model.type == 'block'
        const specs = model.specs

        if (blockRequest) createBlock(specs)
    }
}