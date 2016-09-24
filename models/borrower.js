/**
 * Created by School on 9/23/2016.
 */
var mongoose = require('mongoose');

var Book = require('./book');

var borrow_schema = mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    books:[Book]
});

var Borrower = moongoose.model('Borrower', borrow_schema);
module.exports = Borrower;