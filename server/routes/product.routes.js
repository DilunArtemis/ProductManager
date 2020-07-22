const ProductController = require('../controllers/products.controller');

module.exports = function(app) {
    app.post("/api/products/create", function (req,res){
        ProductController.createProduct});
    app.get("/api/products", ProductController.allProducts);
    app.get("/api/products/:id", ProductController.ProductDetail);
    app.post("/api/products/:id", ProductController.deleteProduct);
    app.put("/api/products/:id", ProductController.updateProduct);
}