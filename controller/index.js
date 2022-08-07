import {Database, Block} from '../model'
import RequestHandler from './RequestHandler'

export default class Controller {
    static createDefaultBlock () {
        return Database.store(new Block())
    }

    static requestHandler(req){
        return RequestHandler.respondTo(req)
    }
    
    static loadBlocks () {
        return Database.retrieve()
    }

    static editBlock () {
        return true
    }
}