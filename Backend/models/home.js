const mongoose = require('mongoose')

const CategorySchema = new mongoose.Schema({
    title : String,
    image : String
})

const ProductSchema = new mongoose.Schema({
    offer: String,
    image: String,
    name:  String,
    label: String,
    price: String,
})

const HomeSchema = new mongoose.Schema({
    category : [CategorySchema],
    products : [ProductSchema]
})

const HomeModel = mongoose.model("homes", HomeSchema);

module.exports = HomeModel
