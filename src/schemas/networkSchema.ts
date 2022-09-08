import joi from 'joi';

const networkSchema = joi.object({
    title: joi.string().max(50),
    networkName: joi.string().required(),
    password: joi.string().required()
})

export default networkSchema;