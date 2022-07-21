import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'

import dotenv from 'dotenv'

dotenv.config() // Load .env file

const app = express() // create express app
const port = process.env.PORT || 5000 // 5000 is the default port if not specified in .env
const uri = process.env.MONGO_CONNECTION_STRING

app.use(cors()) // allow all requests from all domains, unless specifically configured otherwise
app.use(express.json()) // This allows us to send JSON to the server

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true },()=>{
    console.log('🍃 Successfully Connected to MongoDB')//Once the connection is established, we print a message to the console
})

app.listen(port,()=>{ // listen on port(5000) for incoming requests
    console.log(`Server is running on port ${port}`)
})