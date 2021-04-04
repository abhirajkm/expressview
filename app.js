var x=require('express')

var app=x()

app.get('/', (req,res)=>{
    res.send("hello Welcome to Home Page")
} )

app.get('/contact',(req,res)=>{
    res.send("You are entered into the Contact Page")
})

app.listen(3000)