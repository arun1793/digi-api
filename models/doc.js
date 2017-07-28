'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const docSchema = mongoose.Schema({ 

   docType                :String,
   docNo                 :{type: String, unique: true}, 
   rapid_doc_ID           :String,
   rapidID                :String,
   docinfo                :Object,
});


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/digitalId', { useMongoClient: true });

module.exports = mongoose.model('doc', docSchema);       