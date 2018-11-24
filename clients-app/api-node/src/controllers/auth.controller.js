const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const errorResponse = require('../lib/errorResponse');
const { loginRequest, registerRequest } = require('../requests');
const expressJoi = require('express-joi');
const User = require('../models/user.model');
const userService = require('../services/user.service');
const router = express.Router();

router.post('/register', expressJoi.joiValidate(registerRequest), async (req, res) => {
  try {
    await userService.createUser(req.body.username, req.body.password);
    return res.status(200).json({
      message: 'New user has been created'
    });
  } catch (err) {
    errorResponse(res, 500, err.message);
  }
});

module.exports = router;
