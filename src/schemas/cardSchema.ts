import DateExtension from '@joi/date';

import Joi from 'joi';

const joi = Joi.extend(DateExtension);

const cardSchema = joi.object({
    number: joi.string().length(16).pattern(/^[0-9]+$/).messages({ 'string.pattern.base' : 'card number must be a number'}).required(),
    title: joi.string().max(50).required(),
    holderName: joi.string().required(),
    securityCode: joi.string().length(3).pattern(/^[0-9]+$/).messages({ 'string.pattern.base' : 'security code must be a number'}).required(),
    expirationDate: joi.date().format('MM/YY').utc(),
    password: joi.string().required(),
    isVirtual: joi.bool().required(),
    type: joi.valid('debit', 'credit', 'both').required()
});

export default cardSchema