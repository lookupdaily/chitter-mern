import express from 'express'
import router from './lib/routes'
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(router)

app.listen(3001, () => {
  console.log('connected')
})

export default app