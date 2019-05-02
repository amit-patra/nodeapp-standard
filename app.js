"use strict";

const app = require("express")();// buil-in package
const commonHelper = require("./common/commonHelper");
var bodyParser = require('body-parser');    


require("./config/db");
const PORT = 3000;

commonHelper.dispay();
commonHelper.postMethod();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

require("./controllers/User")(app);

app.listen(PORT, function(err, result) {
    if(err) throw err;
    else console.log("Server running at http://localhost:"+PORT);
});