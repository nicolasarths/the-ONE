import {Database, Block} from '../model'
import responses from './responses'
import RequestHandler from './RequestHandler'

export default class Controller {
    static handle(req) { return RequestHandler(req) }
}