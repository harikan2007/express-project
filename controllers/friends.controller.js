const friends = require("../models/friends.model")

function friendsgetid(req, res){
    const friendId = Number(req.params.Id)
    const friend = friends[friendId]
    if (friend){
        res.status(200).json(friend)
    } else {
        res.status(404).json({
            error:"not found!"
        })
    }
}

function friendsget(req, res){
    res.json(friends)
}

function friendspost  (req, res){
    if (!req.body.name){
        res.status(400).json({
            error: "incorrect input"
        })
    }else{
        const newFriend = {
            name:req.body.name,
            id:friends.length
        }
        friends.push(newFriend)
        res.json(newFriend)
        
    }
}


module.exports = {
    friendsgetid,
    friendspost,
    friendsget,
}