require('dotenv').config()
const express = require('express')
const hbs = require('hbs')

const app = express()
const port = process.env.PORT

//Handlebars
app.set('view engine', 'hbs')
hbs.registerPartials( __dirname + '/views/partials')

//Servir contenido estático
app.use( express.static('public') )

// app.get('/', (req, res) => {
//   res.render('home', {
//     nombre: 'Edson Servin',
//     titulo: 'Node App'
//   })
// })

// app.get('/generic', (req, res) => {
//   res.render('generic', {
//     nombre: 'Edson Servin',
//     titulo: 'Node App'
//   })
// })

// app.get('/elements', (req, res) => {
//   res.render('elements', {
//     nombre: 'Edson Servin',
//     titulo: 'Node App'
//   })
// })

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/back/index.html')
})
 
app.listen(port, () => console.log(`App listening at http://localhost:${port}`))