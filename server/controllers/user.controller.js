const validator = require("email-validator");
const userService = require("../services/user.service");
const userViewModel = require("../viewmodel/user");
const querystring = require("querystring");
const url = require("url");

async function createUser(req, res) {
  const { email, password } = req.body;

  if (!(validateEmail(email) && validatePassword(password))) {
    res.status(400).json({ error: "Request is not valid" });
  }

  try {
    const newUser = await userService.createUser(req.body);
    res.status(200).json({ user: userViewModel(newUser) });
  } catch (e) {
    console.error("Failed to create user: " + e);
    res.status(500).json({ error: "Can not create user" });
  }
}

async function updateUser(req, res) {
  const token = req.headers["x-oto-token"];
  try {
    const userUpdate = await userService.updateUser(token, req.body);
    res.status(200).json({ user: userViewModel(userUpdate) });
  } catch (e) {
    console.error("Failed to update user: " + e);
    res.status(500).json({ error: "Can not update user" });
  }
}

async function deleteUser(req, res) {
  try {
    const userDelete = await userService.deleteUser(req.user._id);
    res.status(200).json({ user: userViewModel(userDelete) });
  } catch (e) {
    console.error("Failed to delete user: " + e);
    res.status(500).json({ error: "Can not delete user" });
  }
}

function validateEmail(email) {
  return email && validator.validate(email);
}

function validatePassword(password) {
  return password && password.length >= 6;
}

async function validateToken(req, res) {
  res.status(200).json({ user: userViewModel(req.user) });
}

async function login(req, res) {
  try {
    const userLogin = await userService.login(
      req.body.email,
      req.body.password
    );
    res.status(200).json({ user: userViewModel(userLogin) });
  } catch (e) {
    console.error("Failed to login: " + e);
    res.status(500).json({ error: "Can not login" });
  }
}
async function search(req, res) {
  try {
    const query = req.query;
    const searchUser = await userService.search(query);
    res.status(200).json(userViewModel(searchUser));
  } catch (e) {
    console.error("Failed to search: " + e);
    res.status(500).json({ error: "Can not search" });
  }
}

async function getAllUsernames(req, res){
    try{
        res.json(await userService.getAllUserNames());
    } catch(e){
        res.status(500).json([]);
        console.error(e);
    }
}

module.exports = {
  createUser,
  validateToken,
  updateUser,
  deleteUser,
  login,
  search,
  getAllUsernames
};
