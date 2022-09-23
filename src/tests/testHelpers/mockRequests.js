export const createRequest = {
    method: 'create',
    type: 'block',
    title: 'my first block',
    content: 'this block has no features yet.'
}

export const readRequest = (boardTitle) => {
    return {
        method: 'read',
        type: 'board',
        title: boardTitle
    }
}

export const JSONcreateRequest = JSON.stringify(createRequest)

export default {
    createRequest,
    JSONcreateRequest
}