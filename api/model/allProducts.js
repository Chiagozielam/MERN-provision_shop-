const mongoose = require('mongoose');

const allProductSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true
    },
    productPrice: {
        type: Number,
        required: true
    },
    productDesc: {
        type: String,
        required: false
    },
    productImg: {
        type: String,
        required: true
    },
    path: {
        type: String,
        require: false
    },
    inCart: {
        type: Boolean,
        default: false
    }
    
})

const allProducts = mongoose.model("allProduct", allProductSchema);

module.exports = allProducts;
