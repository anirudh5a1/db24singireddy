const mongoose = require("mongoose") 
const melonSchema = mongoose.Schema({ 
 Brand: String, 
 size: String, 
 price: Number 
}) 
 
module.exports = mongoose.model("Melon", 
melonSchema) 