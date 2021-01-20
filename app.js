// Require related modules
const express = require('express')
const exphbs = require('express-handlebars')

const app = express()
const port = 3000

// Set up template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// Set up body-parse
app.use(express.urlencoded({ extended: true }))

// Set up routes
app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  console.log(req.body)
  res.render('index')
})

// Start and listen on the server
app.listen(port, () => {
  console.log(`Listening on the Express server http://localhost:${port}`)
})
