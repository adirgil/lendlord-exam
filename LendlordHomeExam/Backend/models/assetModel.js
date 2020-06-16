const mongoose = require('mongoose')

let Schema = mongoose.Schema

let AssetSchema = new Schema({
    PropertyAddress : String,
    PropertyValue : Number,
    PropertyPurchaseDate : Date,
    MortgageBalance : Number
});

module.exports = mongoose.model('assets',AssetSchema)