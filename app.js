const express = require('express')
const app = express()
const port = 3000
 
app.get('/', (req, res) => {
  res.send('Home Page')
})

app.get('/hola-mundo', (req, res) => {
  res.send('Hola mundo en su repectiva ruta')
})

app.get('*', (req, res) => {
  res.send('404 | Page not found')
})
 
app.listen(port, () => console.log(`App listening at http://localhost:${port}`))