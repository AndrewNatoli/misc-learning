const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const errorResponse = require('../lib/errorResponse');
const { loginRequest, registerRequest } = require('../requests');
const User = require('../models/user.model');

const router = express.Router();

router.post('/auth/register', registerRequest, async function (req, res) {

  
  bcrypt.hash(req.body.password, 10, function(err, hashedPassword) {

    if (err) {
      return errorResponse(res, 500, err);
    }

    const newUser = new User({
      _id: new mongoose.Types.ObjectId(),
      username: req.body.username,
      password: hashedPassword
    });

    try {
      const result = await newUser.save();
      console.log(result);
      return res.status(200).json({
        message: 'New user has been created'
      })
    } catch (err) {

    }

  })
});

module.exports = router;