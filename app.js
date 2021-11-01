const express = require('express')
const app = express()
const port = 3000

//TODO: require('hbs')
app.set('view engine', 'hbs')

//Servir contenido estático
app.use( express.static('public') )

app.get('/', (req, res) => {
  res.render('home', {
    nombre: 'Edson Servin',
    titulo: 'Node App'
  })
})

app.get('/generic', (req, res) => {
  res.sendFile(__dirname + '/public/generic.html')
})

app.get('/elements', (req, res) => {
  res.sendFile(__dirname + '/public/elements.html')
})

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/back/404.html')
})
 
app.listen(port, () => console.log(`App listening at http://localhost:${port}`))