//Type ``npm run test Block`` to run tests

export default class Block {
    constructor () {
        this.title = 'New Block'
        this.content
    }

    write(content){
        this.content = content
        return this
    }

    eraseContent(){
        this.content = undefined
    }
}
