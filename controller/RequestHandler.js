import BlockView from "../views"
import Factory from "./Factory"
import responses from "./responses"

function createRequest(model) {
    Factory.create(model)
    return responses.success
}

function readRequest(model) {
    return {
        columns: [new BlockView()]
    }
}

function dealer(req) {
    if (req.method == 'create') return createRequest(req.model)
    if (req.method == 'read') return readRequest(req.model)
}

export default class RequestHandler {
    static respondTo(req){
        try { return dealer(req) }
        catch (error) { return responses.failure }
    }
}