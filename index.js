const express = require("express");

const app = express();
let port = 9000;
const path = require("path");
app.set("views", path.join(__dirname, "/views"));
app.listen(port, () => {
  console.log(`i am listening at ${port}`);
});
app.set("view engine", "ejs");

app.get("/ig/:username", (req, res) => {
    let {username}=req.params
    console.log(username)
    const instdata=require("./data.json")
let data=instdata[username]
  if(data){
    res.render("instadata.ejs",{data})

  }
  else{
    res.render("error.ejs")
  }
 
});



