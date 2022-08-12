import RequestHandler from './RequestHandler'

export default class Controller {
    static respondTo(req, res) {
        try{
            res.status(200).send(RequestHandler.handle(req))
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}