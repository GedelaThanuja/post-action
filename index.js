const express=require("express")
const app=express()
const cors=require("cors")
const bodyParser=require("body-parser")
const port=4152;

app.use(bodyParser.urlencoded({
	extended:true
}))

app.use(bodyParser.json())

app.use(cors())

app.get("/",(req,res)=>{
	res.send("hi i am Server")
})

app.post("/newData",(req,res)=>{
	//console.log(req.body)
	const {name,age}=req.body
	console.log(name,age,"values")
	res.send("Data Added")
})

app.listen(port,()=>console.log("Server is started at port"))