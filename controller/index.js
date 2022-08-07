import {Database, Block} from '../model'

export default class Controller {
    static createDefaultBlock () {
        return Database.store(new Block())
    }
    
    static loadBlocks () {
        return Database.retrieve()
    }

    static editBlock () {
        return true
    }
}