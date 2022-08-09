import RequestHandler from './RequestHandler'

export default class Controller {
    static handle(req) { return RequestHandler(req) }

}