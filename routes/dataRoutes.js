const express = require('express')
const router = express.Router();
const UserModel = require('../models/userModel')
const sendEmail = require('../sendEmail')


//get the form submissions
router.get('/entries/:apiKey', async (req,res)=>{

const apiKey = req.url.replace("/entries/", "").trim()

try{

const data = await UserModel.findOne({ _id : apiKey  })
await res.status(200).json(data).end()
}
catch(err){
res.status(200).json({status : false, message : "Coulnot fetch"}).end()
}

})







//update from 3rd party app to server (contact) - this goes on user front end
router.put('/entries', async (req, res)=>{

const { apiKey , entry  } = req.body;
if(apiKey && entry){
try{
const details =  await UserModel.findOneAndUpdate({ _id : apiKey }, {$push : { formFills : { $each : [entry], $position : 0} }});
console.log(details)   

await sendEmail(details.email, entry)
    await res.status(200).json({status : true, message : "Updated"}).end();
}
catch(err){
    res.status(500).json({status : false, message : "Could not update"}).end();
    console.log(err)
}

}
else {
res.status(400).json({status : false, message : "An API key and entry is required"}).end();
}    


})







module.exports = router