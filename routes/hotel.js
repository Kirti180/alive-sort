const express = require('express')
const hotelRouter = express.Router()
const { hotelModel } = require("../models/hotels")
hotelRouter.use(express.json())
// for all types of hotel

hotelRouter.get('/all', async (req, res) => {
    const hotel = await hotelModel.find(req.query)
    res.send({ msg: 'hotels', data: hotel })
})

// hotel meal == breakfast


hotelRouter.get('/breakfast', async (req, res) => {
    const hotel = await hotelModel.find({ meal: "breakfast" })
    res.send({ msg: 'hotels', data: hotel })
})


// payment_type=="full refundable"
hotelRouter.get('/refundable', async (req, res) => {
    const hotel = await hotelModel.find({ payment_type: "full refundable" })
    res.send({ msg: 'hotels', data: hotel })
})

// payment_type=="Reserve pay later"
hotelRouter.get('/reserve', async (req, res) => {
    const hotel = await hotelModel.find({ payment_type: "Reserve pay later" })
    res.send({ msg: 'hotels', data: hotel })
})


// rating>9
hotelRouter.get('/gt9', async (req, res) => {
    const hotel = await hotelModel.find({ ratings: { $gt: 9 } })
    res.send({ msg: 'hotels', data: hotel })
})

// rating>8
hotelRouter.get('/gt8', async (req, res) => {
    const hotel = await hotelModel.find({ ratings: { $gt: 8 } })
    res.send({ msg: 'hotels', data: hotel })
})

// rating>9
hotelRouter.get('/gt7', async (req, res) => {
    const hotel = await hotelModel.find({ ratings: { $gt: 7 } })
    res.send({ msg: 'hotels', data: hotel })
})

// hotel_type=="villa"
hotelRouter.get('/villa', async (req, res) => {
    const hotel = await hotelModel.find({ hotel_type: "villa" })
    res.send({ msg: 'hotels', data: hotel })
})


// hotel_type=="Apart-hotel"
hotelRouter.get('/aphotel', async (req, res) => {
    const hotel = await hotelModel.find({ hotel_type: "Apart-hotel" })
    res.send({ msg: 'hotels', data: hotel })
})


// hotel_type=="hotel"
hotelRouter.get('/hotels', async (req, res) => {
    const hotel = await hotelModel.find({ hotel_type: "hotel" })
    res.send({ msg: 'hotels', data: hotel })
})



// location==Juhu Beacha

hotelRouter.get('/beach', async (req, res) => {
    const hotel = await hotelModel.find({ location: "Juhu Beacha" })
    res.send({ msg: 'hotels', data: hotel })
})


// location=="Gateway of India"

hotelRouter.get('/gate', async (req, res) => {
    const hotel = await hotelModel.find({ location: "Gateway of India" })
    res.send({ msg: 'hotels', data: hotel })
})

// meal=="lunch"

hotelRouter.get('/lunch', async (req, res) => {
    const hotel = await hotelModel.find({ meal: "lunch" })
    res.send({ msg: 'hotels', data: hotel })
})


// meal=="dinner"

hotelRouter.get('/dinner', async (req, res) => {
    const hotel = await hotelModel.find({ meal: "dinner" })
    res.send({ msg: 'hotels', data: hotel })
})

//pool"

hotelRouter.get('/pool', async (req, res) => {
    const hotel = await hotelModel.find({ pool: "pool" })
    res.send({ msg: 'hotels', data: hotel })
})

//assending sort low to high
hotelRouter.get('/low', async (req, res) => {
    const hotel = await hotelModel.find().sort({ "price": 1 })
    res.send({ msg: 'hotels', data: hotel })
})

//desending sort high to low
hotelRouter.get('/high', async (req, res) => {
    const hotel = await hotelModel.find().sort({ "price": -1 })
    res.send({ msg: 'hotels', data: hotel })
})
//search by hotel
hotelRouter.get("/search", async (req, res) => {

    const { name } = req.query
    console.log(req.query)
    try {

        const hotel = await hotelModel.find({ name: { $regex: `${name}`, $options: "i" } })
        res.send({ msg: 'hotels', data: hotel })
        // console.log(query)
    } catch (err) {
        console.log(err)
    }
})

hotelRouter.post('/create', async (req, res) => {

    const payload = req.body
    try {
        const hotels = new hotelModel(payload)
        await hotels.save()
        res.send({ msg: "created" })
    } catch (err) {
        console.log(err)
    }

})


hotelRouter.patch('/update/:id',async(req,res)=>{
    const payload=req.body
    const Id= req.params.id
    try{
        const comment= await hotelModel.findByIdAndUpdate({_id:Id},payload)
        res.send({msg:"patch req"})
    }catch(err){
        console.log(err)
    }

})
hotelRouter.delete('/delete/:id',async(req,res)=>{
    // const payload=req.body
    const Id= req.params.id
    try{
        const comment= await hotelModel.findByIdAndDelete({_id:Id})
        res.send({msg:"delete req"})
    }catch(err){
        console.log(err)
    }
})
module.exports = { hotelRouter }