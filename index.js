require("dotenv").config()

const express = require('express')
const app = express()

const db = require('./src/config/database')

const port = process.env.PORT || 3000
const homeRouter = require("./src/routes/home")
const userRouter = require("./src/routes/user")

if (!db) {
    console.log('cannot connect to database');
    
}

app.use('/', homeRouter)
app.use('/users', userRouter)

app.listen(port, ()=>{
    console.log((`server running on port: ${port}`));
    
})