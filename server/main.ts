const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static(path.join(__dirname, '../public')))
const port: number = process.env.SERVERPORT ? parseInt(process.env.SERVERPORT, 10) : 8080

app.listen(port, () => console.log(`Lily Packs listening on port ${port}`))
