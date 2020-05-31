import express from 'express'
const app = express()
import MessageApp from './lib/model'

let messageApp = new MessageApp("/\///json/\//testMessages.json")

app.get('/', function (req, res) {
  let result = messageApp.allMessages
  res.json(result)
})
app.listen(3001, () => {
  console.log('connected')
})

export default app