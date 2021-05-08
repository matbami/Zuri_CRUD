const express = require('express')
const dotenv= require('dotenv')
dotenv.config()
const connectDB = require('./config/db')
connectDB()

const app = express()
app.use(express.json())

const user = require('./routes/user')

const PORT = process.env.PORT||5000

app.use('/api/', user)







app.listen(PORT,()=>{
    console.log(`Server running...on port ${PORT}`)
})