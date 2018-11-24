const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('../models/user.model');

const createUser = async (username, password) => {
  const existingUser = await findUserByUsername(username);
  if (existingUser) {
    throw new Error('USERNAME_TAKEN');
    return;
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new User({
    _id: new mongoose.Types.ObjectId(),
    username: username,
    password: hashedPassword
  });

  return await newUser.save();
};

const findUserByUsername = async username => {
  const user = await User.findOne({ username });
  console.log('found user', user);
  return user;
};

module.exports = {
  createUser,
  findUserByUsername
};
