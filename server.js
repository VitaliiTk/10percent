import express from 'express'
const app = express()

app.get('/', (_, res) => {
  res.send('<h1>MotoBoard test server is running</h1>')
})

app.listen(3000, () => console.log('Server is running on port 3000'))
