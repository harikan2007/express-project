const express = require("express");
const friendsRouter = express.Router();
const friendsController = require("../controllers/friends.controller");
friendsRouter.post("/", friendsController.friendspost);
friendsRouter.get("/", friendsController.friendsget);
friendsRouter.get("/:Id", friendsController.friendsgetid);

module.exports = friendsRouter;
