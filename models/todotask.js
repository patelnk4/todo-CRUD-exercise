const mongoose = require('mongoose');
const todoTaskSchema = new mongoose.Schema({
title: {
    type: String,
    required: true
},
content: {
    type: String,
    required: true
},
date: {
    type: Date,
    default: Date.now
}
})
module.exports = mongoose.model('TodoTask',todoTaskSchema,'tasks');
//model(NOT DB //this is just name of the model we can refernce elsewhere, schema, collections )  (in monggose=> cluster, db,collections,dcouments)