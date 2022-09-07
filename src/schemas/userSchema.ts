import joi from "joi";

export const userSignUpSchema = joi.object({
    name: joi.string().required(),
    email: joi.string().email().required(),
    password: joi.string().min(10).required(),
    checkPassword: joi.string()
        .valid( joi.ref('password'))
        .required()
})