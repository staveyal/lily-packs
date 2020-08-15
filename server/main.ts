import express from 'express'
import bodyParser from 'body-parser'
import path from 'path'

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static(path.join(__dirname, '../public')))
const port: number = process.env.SERVERPORT ? parseInt(process.env.SERVERPORT, 10) : 8080

app.listen(port, () => console.log(`Lily Packs listening on port ${port}`))
