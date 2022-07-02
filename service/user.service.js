const User = require('../model/user.model')

const getEmail = (field)=>{
    return User.findOne(field)
}

const createField = (fileds)=>{
    return User.create(fields)
}

module.exports = {getEmail,createField}