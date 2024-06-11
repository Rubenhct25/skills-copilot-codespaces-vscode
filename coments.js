//create web server
const express = require('express')
const app = express()
const port = 3000

//import comments
const comments = require('./comments.js')
app.get('/', (req, res) => {
  res.send('Welcome to my comments app')
})

//get all comments
app.get('/comments', (req, res) => {
  res.json(comments)
})

//get comment by id
app.get('/comments/:id', (req, res) => {
  const id = req.params.id
  const comment = comments.find(comment => comment.id === id)
  res.json(comment)
})

app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`)
})


