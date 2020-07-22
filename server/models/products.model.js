const mongoose = require ('mongoose');

const ProductSchema = new mongoose.Schema({
    title: 
    {
        type: String, 
        required: [true, "Product must have a title, otherwise, what even is it?"],
        minLength: [3, "It has to be at least three characters. "]
    },
    price: 
    {
        type: Number, 
        required: [true, "The product needs a price!"],
        min: [.01, "The price must be a positive value!"]
    },
    description: {
        type: String,
        required: [true, "Describe the product!"],
        minLength: [10, "The description needs to be ten or more characters."]
    }
}, {timestamps: true});



module.exports.Product = mongoose.model('Product', ProductSchema);