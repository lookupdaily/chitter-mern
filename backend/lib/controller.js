import MessageApp from './model'

let messageApp

if (process.env.npm_lifecycle_event == "test") {
  messageApp = new MessageApp(`/\///json/\//testMessages.json`)
} else {
  messageApp = new MessageApp(`/\///json/\//messages.json`)
}

function getAll() {
  return new Promise((resolve,reject) => {
    let result = messageApp.allMessages
    if (result !== []) {
      resolve(result) 
    } else {
      reject(result)
    }
  })
}

export { getAll }