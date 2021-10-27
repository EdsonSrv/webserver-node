const express = require('express')
const app = express()
const port = 3000

//Servir contenido estático
app.use( express.static('public') )

app.get('/hola-mundo', (req, res) => {
  res.send('Hola mundo en su repectiva ruta')
})

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/404.html')
})
 
app.listen(port, () => console.log(`App listening at http://localhost:${port}`))