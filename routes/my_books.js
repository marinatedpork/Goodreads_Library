/**
 * Created by School on 9/23/2016.
 */
var express = require('express');
var router = express.Router();
var Book = require('../models/book.js');
var request = require('request');
var key = require('../secrets/secret_key.js');
var converter = require('xml2js').parseString;

router.post('/search_results',function(req,res,next){
    console.log(req.body);
    var books = book_data_request( req.body,req.body.search_param);
    return res.render('search_results',{results:books, error:req.flash('Some Sort of Error')})
});

router.get('/all_books', function(req,res, next){
    Book.find(function(err,book_docs){
        if(err){return next(err);}
        console.log(book_docs);
        for(book_docs.isbn in book_docs){

        }
        return res.render('all_books',{books:book_docs, error: req.flash('error')})
    })
});


function book_data_request(res, search_parameter){
    var query_parameters = {};
    var REQ_KEY = key;

    var search_url = 'https://www.goodreads.com/search/index.xml?q='+search_parameter+'&key='+key;

    request(search_url, function(err,response,body){


        converter(body, function(err, result){
            //console.log(JSON.stringify(result));
            var JSON_body = result;
            console.log(JSON.stringify(JSON_body))
            //var resulting_json = result;
            //return resulting_json
        })
        //console.log(JSON.stringify(JSON_body))

    });
    // return JSON_body
}
module.exports = router;