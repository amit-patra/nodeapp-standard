"use strict";


const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/products");

mongoose.connection.on("error", function(err, result){

    console.log("err", err);
});
