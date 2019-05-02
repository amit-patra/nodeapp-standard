"use strict";
const UserModel = require("../models/UserModel");



module.exports = function(app) {

    app.get("/product", function(req, res){
        var userModel = new UserModel();
        userModel.postData = req.body;
        userModel.findAllUsers(function(err, result){

            if(err) {
                res.status(500);
                res.send({
                    error:err
                });
            }
            else {
                res.status(200);
                res.send({
                    message:"success",
                    data:result
                })
            }
        });
    });
    
    
    app.post("/product", function(req, res){
        
        var userModel = new UserModel();
        userModel.postData = req.body;
        userModel.createUser(function(err, result){

            if(err) {
                res.status(500);
                res.send({
                    error:err
                });
            }
            else {
                res.status(201);
                res.send({
                    message:"success"
                })
            }
        });
    });
    
    
    app.put("/product", function(req, res){
        res.status(200);
        res.send({"message":"success"});
    });
    
    app.delete("/product", function(req, res){
        res.status(200);
        res.send({"message":"success"});
    });
    


}