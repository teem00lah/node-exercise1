import express from 'express';

const app = express();
//Product Path
app.get('/products',(req,res)=>{
    res.json({products:"This is the Get product path"})
})
app.post('/products',(req,res)=>{
    res.json({products:"This is the POST products path"})
})
app.patch('/products',(req,res)=>{
    res.send({products:"This is the PATCH products path"})
})
app.delete('/products',(req,res)=>{
    res.send({products:"This is the DELETE products path"})
})
//User Path
app.get('/users',(req,res)=>{
    res.json({users:"This is the GET users paths"})
})
app.post('/users',(req,res)=>{
    res.json({users:"This is the POST users path"})
})
app.patch('/users',(req,res)=>{
    res.send({users:"This is the PATCH users path"})
})
app.delete('/users',(req,res)=>{
    res.send({users:"This is the DELETE users path"})
})

app.listen(2020,()=>{
    console.log('http://localhost:2020');
    })
    


