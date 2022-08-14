var jwt = require('jsonwebtoken');
var {User} = require('../models');
const bcrypt = require('bcrypt');
const saltRounds = 10;
exports.login = async (req, res, next)=>{
    let user = await User.findOne({
        where: {username:req.body.username}
    });
    if(user){
        res.status(200).json({success:true, data:{

        }})
    }else{
        res.status(200).json({success:false, message:"User tidak ditemukan"});
    }
}
exports.create = async (req,res, next)=>{
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync("raihan", salt);
    User.create({
        username:"raihan",
        password:hash
      }).catch({
        if(err){
          console.log(err);
        }
      })
    res.status(200).json({success:true});
}