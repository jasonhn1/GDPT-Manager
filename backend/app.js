const express = require('express');
const app = express();
const cors = require('cors');

const mongoose = require('./mongoose.js');

const Member = require('./models/member');
const User = require('./models/user');

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

app.use(express.json());
app.use(cors());


app.post("/login", (req, res, next) => {
    let fetchedUser;

    User.findOne({email:req.body.email}).then(user=>{
      if(!user){
        return res.status(401).json({
          message: "Auth failed no such email"
        })
      }
      fetchedUser = user;

      if (req.body.password == user.password){
        const token = jwt.sign(
            { email: fetchedUser.email, userId: fetchedUser._id },
            "secret_this_should_be_longer",
            { expiresIn: "24h" }
          );
          res.status(200).json({
            token: token,
            expiresIn: 86400,
            userId: fetchedUser._id
          });
      }else{
        return res.status(401).json({
            message: "Auth failed inccorect password"
          })
      }
    
    })
  });

// Gets all the members from the database
app.get('/members',(req,res)=>{
Member.find({})
    .then(members => res.send(members))
    .catch((error) => console.log(error));
});

// Creates a member and stores it into the database
app.post('/members',(req,res)=>{
    var member = new Member({'name' : req.body.name,
                'address': req.body.address,
                'dob':req.body.dob,
                'contact': {
                    "name":req.body.contact["name"],
                    "relation":req.body.contact["relation"],
                    "phone":req.body.contact["phone"]
                },
                'phapdanh':req.body.phapdanh,
                "active":true});
                
    member.save()
    .then((member)=> res.send(member))
    .catch((error) => console.log(error));
});



// Gets a member and updates the info
app.patch('/members/:memberId', (req,res) =>{
    Member.findOneAndUpdate({'_id': req.params.memberId},{$set:req.body})
    .then((member)=> res.send(member))
    .catch((error) => console.log(error));
});

// This deletes a memeber
app.delete('/members/:memberId', (req,res) =>{
   const member = Member.findByIdAndDelete(req.params.memberId)
    .then((member)=> res.status(200).send(member))
    .catch((error) => console.log(error));
});


app.listen(3000,()=> console.log("Server is connected on 3000"))


