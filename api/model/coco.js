const mongoose = require('mongoose');

const cocoSchema = new mongoose.Schema({
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

const coco = mongoose.model("coco", cocoSchema);

module.exports = coco;
