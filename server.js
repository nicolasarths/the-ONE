import http from 'http'
import router from './routes/router.js'

const port = process.env.PORT || 3000

const server = http.createServer(router)
server.listen(port)