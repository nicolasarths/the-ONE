import responses from "./responses"

export default function RequestHandler(req){
    if (req.method == 'create') return createRequest(req.model)
    if (req.method == 'read') return readRequest(req)
}

function createRequest(model) {
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
    return {
        board: title,
        grid: [
            [],
            [],
            []
        ]
    }
}

function readRequest(req){
    const titleOfBoardRequest = req.model.specs.title.toLowerCase()
    if (titleOfBoardRequest == 'dashboard') return getDashboard(req)
    else return nonExistantBoard(req)
}