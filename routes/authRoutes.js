const express = require('express')
const router = express.Router();
const UserModel = require('../models/userModel')
const mongoose = require('mongoose')

//create a new account that returns an api key
router.post('/register', async (req,res)=> {


try{

    const accountExists = await UserModel.findOne({ email : req.body.email});

    if(accountExists){ res.status(200).json({status : false, message : "Email already in use"}).end()  }
else {let _id = mongoose.Types.ObjectId();

    const user = new UserModel({

        apiKey : _id,
        email : req.body.email,
        uid : req.body.uid,
        formFills : [{}]
        
        })   

    await user.save();
    await res.status(200).json({ formFills :[{}],  apiKey : _id, email : req.body.email   }).end()    
}
    
}
catch(err){
    console.log(err)
    res.status(500).json({status : false, message : "Unable to create account"}).end()
}




})


//login route

router.post('/login', async (req,res)=> {

try{

const details = await UserModel.findOne({uid : req.body.uid});
if(details){
await res.status(200).json(details).end();
}
else { res.status(404).json({status : false, message : "No such user found"})  }
}
catch(err){

    res.status(500).json({status : false, message : "Couldnot find user"}).end()

}


})




module.exports = router