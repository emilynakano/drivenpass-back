import joi from 'joi';

const securityNoteSChema = joi.object({
    note: joi.string().required().max(100),
    title: joi.string().required().max(50)
})

export default securityNoteSChema;