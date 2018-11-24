const { Joi } = require('express-joi');

const registerRequestSchema = {
  username: Joi.types.String().required(),
  password: Joi.types
    .String()
    .required()
    .min(4)
};

module.exports = registerRequestSchema;
