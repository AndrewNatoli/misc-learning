const { Joi } = require('express-joi');

const loginRequestSchema = {
  username: Joi.types.String().required(),
  password: Joi.types.String().required()
};

module.exports = loginRequestSchema;
