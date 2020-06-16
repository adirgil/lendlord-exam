const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/AssetsDB')

const db = mongoose.connection

db.on('open', () =>
{
    console.log('DB connected!')
})