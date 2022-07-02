const {userValidation} = require('../validation/user.validation')
const bcrypt = require('bcrypt')
const config = require('config')
const userService = require('../service/user.service')


const getLoginForm = (req,res) =>{
    return res.render('login/layout')
}

const login = (req,res)=>{

}

const getSignupForm =(req,res)=>{
    return res.render('signup/layout')
}

const signup = async(req,res)=>{
    const {email,password} = req.body
    const fields = {email,password}
    const {error,value} = userValidation(fields)
    if(error){
        return res.render('signup/layout',{message:error.details[0].message})
    }
    const findUser = await userService.getEmail({email})
    if(findUser){
        return res.render('login/layout',{message:'User Exists Login Here'})
    }
    const hashPassword = await bcrypt.hash(password,config.get('hash.salt'))
    const createUser = await userService.createField({email,password:hashPassword})
    return res.render('signup/layout',{message:'User Created'})

}

module.exports = {getLoginForm,login,getSignupForm,signup}