import Controller from "../controller/Controller.js"

export default (app) => {
    app.get('/api/:type/:boardTitle', Controller.respondTo)
}