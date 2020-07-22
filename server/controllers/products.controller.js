const Product = require('../models/products.model');


module.exports.CreateProduct = (req,res) => {
    const { title, price, description } = req.body;
    Product.create({
        title, price, description
    })
    .then(data => red.json({message: "success", results: data}))
    .catch(err => res.json({message: "error", results: err}))
}

module.exports.allProducts = (req,res) => {
    Product.find({})
    .then(data => res.json({message: "success", results: data}))
    .catch(err => res.json({message: "error", results: err}))
}

module.exports.ProductDetail = (req,res) => {
    Product.findOne({_id: req.params.id})
    .then(data => res.json({message:"success", results: data}))
    .catch(err => res.json({message: "error", results: err}))
}

module.exports.deleteProduct = (req,res) => {
    Product.findOneAndDelete({_id: req.params.id})
    .then(data => res.json({message:"success", results: data}))
    .catch(err => res.json({message: "error", results: err}))
}

module.exports.updateProduct = (req,res) => {
    Product.findOneAndUpdate({_id: req.params.id})
    .then(data => res.json({message:"success", results: data}))
    .catch(err => res.json({message: "error", results: err}))
}