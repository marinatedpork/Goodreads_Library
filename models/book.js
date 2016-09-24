/**
 * Created by School on 9/23/2016.
 */
var mongoose = require('mongoose');

var bookSchema = mongoose.Schema({
    title:String,
    large_image:String,
    small_image:String,
    isbn:{type:String, required:true, unique: true},
    number_owned:{type:Number, min:1},
    //wishlisted:Boolean,
    loaned_to : String
});

var Book = mongoose.model('Book',bookSchema);
module.exports = Book;