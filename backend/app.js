import express from 'express'
import router from './lib/routes'
import bodyParser from 'body-parser'
import cors from 'cors'
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())

app.use(router)

app.listen(3001, () => {
  console.log('connected')
})

export default app