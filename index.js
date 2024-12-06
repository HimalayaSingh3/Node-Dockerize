const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json([
    {
      id: 1,
      name: "himalaya singh",
      age: 20,
    },
    {
        id: 2,
        name: "alok kumar",
        age:21
    },
    {
        id: 3,
        name: "vishal pratap singh",
        age:20
    },
    {
        id: 4,
        name: "arun sharma",
        age:21
    }  
  ]);
});

app.listen(5000,()=>{
    console.log("app is running on 5000 port")
})
