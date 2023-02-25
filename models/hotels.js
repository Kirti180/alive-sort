const mongoose = require('mongoose')
hotelSchema = mongoose.Schema({
    name: String,
    price:Number,
    image:String,
    hotel_type:String,
    ratings:Number,
    payment_type:String,
    meal:String,
    away:String,
    pool:String,
    location:String
})
hotelModel = mongoose.model('hotel', hotelSchema)
module.exports = { hotelModel }