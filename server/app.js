const express=require("express");
const app=express();

const graphqlHTTP = require("express-graphql");
// const schema=require("./schema/schema");
const mongoose=require("mongoose");
// mongoose.connect("mongodb+srv://ritikdua:ritikdua123@graphql-t3eew.mongodb.net/test?retryWrites=true&w=majority");
// mongoose.connection.once("open",()=>{
// 	console.log("Db connected");
// })

app.listen(4000, () => {
  console.log("Server listening on 4000");
});
app.get("/",(req,res)=>{
	res.send("hello world");
})
