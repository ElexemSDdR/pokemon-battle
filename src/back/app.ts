import { type Request, type Response } from 'express'
import express from 'express'
import path from 'node:path'
import pokemon from './routes/pokemons.js'

const dirname = path.resolve()
const PORT = 3000

const app = express()

app.use(express.static(path.join(dirname, 'dist/functionalities')))
app.use(express.static(path.join(dirname, 'src/styles/')))
app.use(express.static(path.join(dirname, 'src/assets/')))
app.use(express.static(path.join(dirname, 'public/')))

app.use(express.json())

app.use((req: Request, res: Response, next) => {
  console.log(req.url)
  next()
})

app.get('/', (req: Request, res: Response) => {
  res.sendFile(path.join(dirname, 'src/pages/index.html'))
})

app.get('/pokemon', pokemon)
app.get('/pokemon/battle', pokemon)

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`)
})
