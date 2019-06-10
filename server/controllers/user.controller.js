const validator = require("email-validator");
const userService = require("../services/user.service");
const userViewModel = require("../viewmodel/user");
const querystring = require("querystring");
const url = require("url");

async function createUser(req, res) {
  try {
  console.log(`Body of createUser: ${JSON.stringify(req.body)}`);
  const user = await userService.extendUser(req.body);
  res.sendStatus(200).json({user});
  } catch(e){
    res.status(500).json({
      err:e.message
    })
    console.error(`Failed to extend user. message: ${e.message} \n stack trace: ${e.stack}`)
  }
}

async function getUser(req, res){
  try{
    const user = await userService.getUserByUid(req.user.uid)
    res.status(200).json(user);
  } catch(e){
    res.status(500).json({
      err:e.message
    })
    console.error(`Failed to get user message: ${e.message} \n stack trace: ${e.stack}`)
  }
}

async function updateUser(req, res) {
  try {
    const userUpdate = await userService.updateUser(req.user.uid, req.body);
    res.status(200).json({user:userUpdate});
  } catch (e) {
    console.error("Failed to update user: " + e);
    res.status(500).json({ error: "Can not update user" });
  }
}

async function deleteUser(req, res) {
  try {
    const userDelete = await userService.deleteUser(req.user.uid);
    res.status(200).json({ user:(userDelete) });
  } catch (e) {
    console.error("Failed to delete user: " + e);
    res.status(500).json({ error: "Can not delete user" });
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
  getUser,
  updateUser,
  deleteUser,
  search,
  getAllUsernames
};
