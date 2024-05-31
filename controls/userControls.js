const User=require('../moduls/user');
const bcrypt = require('bcrypt')
const jwtHelpers = require('../utils/jwtHelpers')
exports.register =async (req,res)=>{
    const {name,email,password}=req.body
    const user= await User({
        name,email,password:bcrypt.hashSync(password,8)
    })
    try{
       await user.save()
       res.status(200).json({
        succass:true
       })
    } catch(e){
     res.status(500).json({
        mseeage:e
     })
    }
}
exports.login=async (req,res)=>{
    const {email,password}=req.body
    const user= await User.findOne({email})
    if(user&& bcrypt.compareSync(password,user.password)){
        res.status(200).json({
            name: user.name,
            jwt:jwtHelpers.sign({sub:user._id})
        })
    }    else {
        res.status(401).json({
            message: "not found "
        })
    }

}
exports.update=async (req,res)=>{
    const {email,password}=req.body
    const user= await User.findOne({email})
    if(user&& bcrypt.compareSync(password,user.password)){
        
        res.status(200).json({
            name: user.name,
            jwt:jwtHelpers.sign({sub:user._id})
        })
    }    else {
        res.status(401).json({
            message: "not found "
        })
    }

}