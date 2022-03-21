const path = require('path');

function getMessage (req, res){
    res.render('messages',{
        title:"hello!",
        friend:"john smith"
    } )
    //res.sendFile(path.join(__dirname,"..","public","sound","4_5814678105742117039.mp3"))
    //res.send("<ul><li>hello my friend!</li></ul>")
}

function postMessage(req, res){
    console.log("app.post is here")
}

module.exports={
    getMessage,
    postMessage,
}