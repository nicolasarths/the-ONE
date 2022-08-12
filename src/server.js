import express from 'express'
import router from './routes/router.js'

const app = express()
const port = process.env.PORT || 8080

router(app)

app.listen(port, () => console.log(`Up on port ${port}`))