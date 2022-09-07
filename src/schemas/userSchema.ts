import joi from "joi";

export const userSignUpSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required(),
    checkPassword: joi.string()
        .valid( joi.ref('password'))
        .required()
        .messages( { allowOnly: 'must match password'} )
})