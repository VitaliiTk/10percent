import express from 'express'
const app = express()

app.get('/', (_, res) => {
  res.send('<h1>Server is run</h1>')
})

app.listen(3000, () => console.log('Server is running on port 3000'))
