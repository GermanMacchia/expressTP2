import express from 'express'
import  { getInventors, getInventor, addInventor } from './inventors.js'

const PORT = 3000
const app = express()
app.use(express.json())

const url = 'https://628822847af826e39e5d1d18.mockapi.io/usuarios'

app.listen( PORT, () => console.log(`Servidor express levantado en el puerto: ${PORT}`))

app.get('/', async (req, res) =>{
	const inventors = await getInventors()
	res.json(inventors)
})

app.get('/:id', async (req, res) =>{
	const id = req.params
	const inventor = await getInventor(id)
	res.json(inventor)
})

app.post('/', async (req, res) => {
	const inventor = req.body
	const result = await addInventor(inventor)
	res.json(result)
})