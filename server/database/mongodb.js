const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/categoryList', {useNewUrlParser: true});


const Schema = mongoose.Schema

const categorySchema = new Schema({
    parentId: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    status: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Category',categorySchema)