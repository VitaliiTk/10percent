const express = require('express')
const app = express()

const PORT = 3000

// Указываем, что движок шаблонов — ejs
app.set('view engine', 'ejs')

app.get('/', (_, res) => {
  const data = { title: `MotoBoard`, message: `test VDS server` }
  res.render('index.ejs', data) // index.ejs в папке views
})

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
