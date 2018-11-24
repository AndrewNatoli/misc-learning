const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const errorResponse = require('../lib/errorResponse');
const { loginRequest, registerRequest } = require('../requests');
const expressJoi = require('express-joi');
const User = require('../models/user.model');

const router = express.Router();

router.post('/register', expressJoi.joiValidate(registerRequest), async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const newUser = new User({
      _id: new mongoose.Types.ObjectId(),
      username: req.body.username,
      password: hashedPassword
    });

    const result = await newUser.save();
    console.log(result);

    return res.status(200).json({
      message: 'New user has been created'
    });
  } catch (err) {
    errorResponse(res, 500, err);
  }
});

module.exports = router;
