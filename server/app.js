const express = require('express')
const connection = require('./database/db')
const dotenv = require('dotenv')
const cors = require('cors')
const bodyParser = require('body-parser')

const routes = require('./routes/route')


const app = express()
app.use(cors())
dotenv.config()


app.use(bodyParser.json({
    extended:true
}))
app.use(bodyParser.urlencoded({
    extended:true
}))

app.use('/',routes)

const username = process.env.DB_USERNAME
const password = process.env.DB_PASSWORD
connection(username,password)

app.listen(8000,()=>{
    console.log("Application Started.....")
})