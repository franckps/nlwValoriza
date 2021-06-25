import 'reflect-metadata'
import * as express from 'express'

import './database'

const app = express()

app.listen(3000, () => {
    console.log('server is running on http://127.0.0.1:3000')
})