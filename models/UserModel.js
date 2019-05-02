"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema; 
const UserSchema = new Schema({   
    name: {type:String, required:true, unique:true},
    email: {type:String, required:true}
  });

  mongoose.model("User", UserSchema);
  const User = mongoose.model("User");

class UserModel {

    createUser(done) {

        console.log("crrateUser", this.postData);
        var userObj = new User();
        userObj.name = this.postData.name;
        userObj.email = this.postData.email;
        userObj.save(done);
    }

    findAllUsers(done){

        User.find({}, done);
    }
}


module.exports = UserModel;