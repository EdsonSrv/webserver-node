const express = require('express')
const app = express()
const port = 3000

//Servir contenido estático
app.use( express.static('public') )

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