const Joi = require('joi')

const userValidation = (fields)=>{
    const validationSchema = Joi.object({
        email:Joi.string().min(8).max(32).required(),
        password:Joi.string().min(6).max(24).required()
    })

    const {error,value} = validationSchema(fields)
    return {error,value}
}

module.exports = {userValidation}