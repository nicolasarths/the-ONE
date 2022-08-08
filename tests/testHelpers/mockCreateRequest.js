import Controller from "../../controller"

export const request = {
    method: 'create',
    model: {
        type: 'block',
        specs: {
            title: 'my first block',
            content: 'this block has no features yet.'
        }
    }
}

export default function mockCreateRequest(){
    return Controller.handle(request)
}