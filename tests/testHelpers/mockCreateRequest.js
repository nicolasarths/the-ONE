import Controller from "../../controller"

export default {
    method: 'create',
    model: {
        type: 'block',
        specs: {
            title: 'my first block',
            content: 'this block has no features yet.'
        }
    }
}