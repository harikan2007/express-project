const express = require("express")
const friendsRouter = require ("./routes/friends.router")
const messagesRouter = require("./routes/messages.router")
const path = require("path")
const PORT = 3000;
const app = express()
app.set("view engine", "hbs")
app.set("views", path.join(__dirname,"views"))
app.use("/site",express.static(path.join(__dirname,"public")))
app.listen(PORT, () => console.log(`Listening on ${PORT}`))
app.use(express.json());

app.get("/",(req, res)=>{
    res.render("index", {
        title:"this is the main page",
        caption:"this is the caption part!",    
    })
})
app.use('/friends', friendsRouter);

app.use('/messages', messagesRouter);
