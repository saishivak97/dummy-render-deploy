const express = require('express')

const app = express()

app.get("/about",(req,res)=>res.send("deployed in render"))

app.listen(8000,()=>{
    console.log("server started on port : 8000...");
})