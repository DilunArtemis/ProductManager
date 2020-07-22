const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/product_db', {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    // useFindAndModify: true
})
    .then(() => console.log("Connection Established"))
    .catch( err => console.log("Connection Failed", err));