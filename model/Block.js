//Type ``npm run test Block`` to run tests

export default class Block {
    constructor () {
        this.title = 'New Block'
        this.content
    }

    rename(newTitle){
        return this.title = newTitle
    }

    write(content){
        return this.content = content
    }
    
    eraseContent(){
        this.content = undefined
    }
}
