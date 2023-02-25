const express=require('express')
const { connection } = require('./db')
const {hotelRouter}=require('./routes/hotel')
const  cors=require('cors')
const{userRoute}=require('./routes/register')
const app=express()
app.use(express.json())
app.use(cors())
app.use('/user',userRoute)
app.use('/hotel',hotelRouter)
app.listen(process.env.port,async()=>{
    try{
        await connection
        console.log('connected to db')
    }catch(err){
        console.log(err)
    }
})