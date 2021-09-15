const mongoose = require('mongoose');


const MemberSchema = new mongoose.Schema({
    name:{
        type:String,
        minlength:3,
        required:true
    },
    address:{
        type:String,
        minlength:3
    },
    dob:String,
    phapdanh:{
        type:String,
        default:""
    },
    contact:{
        name:{
            type:String,
            minlength:3,
            required:true
        },
        relation:String,
        phone:Number,
    },
    active:{
        type:Boolean,
        default:true
    }
});

const Member = mongoose.model('Member',MemberSchema,'members');


module.exports = Member;
