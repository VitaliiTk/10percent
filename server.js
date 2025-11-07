const express = require('express')
const app = express()

const PORT = 3000

// Указываем, что движок шаблонов — ejs
app.set('view engine', 'ejs')

app.get('/', (_, res) => {
  res.send('<h1>MotoBoard test server is running</h1>')
})

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
