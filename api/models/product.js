const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {type: String, required: true }, //Validation on name
    price: {type: Number, required: true} //Validation on price
});

module.exports = mongoose.model('Product', productSchema);