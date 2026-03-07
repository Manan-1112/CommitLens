const express=require("express")
const app=express()
const PORT=8000

app.get('/',(req,res)=>{
    return res.json({"msg":"Welcome to CommitLens"})
})

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})
