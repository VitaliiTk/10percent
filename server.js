import express from 'express'
const app = express()

app.get('/', (_, res) => {
  res.send({ message: 'Express server is run' })
})

app.listen(3000, () => console.log('Server is running on port 3000'))
