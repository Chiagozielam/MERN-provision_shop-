const mongoose = require('mongoose');

const milkSchema = new mongoose.Schema({
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
    }
    
})

const milk = mongoose.model("milks", milkSchema);

module.exports = milk;
