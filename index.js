const express=require('express')
const app=express() 
const cors=require('cors');
const bodyParser=require('body-parser');

app.use(cors())
app.use(bodyParser.json());

const person=[
    {name:'md sohidul islam 1',email:'mddsohidulislam@gmail.com'},
    {name:'md sohidul islam2 ',email:'mddsohidulislam@gmail.com'},
    {name:'md sohidul islam 3',email:'mddsohidulislam@gmail.com'},
    {name:'md sohidul islam 4',email:'mddsohidulislam@gmail.com'},
    {name:'md sohidul islam 5',email:'mddsohidulislam@gmail.com'},
    {name:'md sohidul islam 6',email:'mddsohidulislam@gmail.com'},
    {name:'md sohidul islam 7',email:'mddsohidulislam@gmail.com'},
    {name:'md sohidul islam 8',email:'mddsohidulislam@gmail.com'},
    {name:'md sohidul islam 9',email:'mddsohidulislam@gmail.com'},
    {name:'md sohidul islam 10',email:'mddsohidulislam@gmail.com'},
    {name:'md sohidul islam 11',email:'mddsohidulislam@gmail.com'},
    {name:'md sohidul islam 12',email:'mddsohidulislam@gmail.com'},
    {name:'md sohidul islam 13',email:'mddsohidulislam@gmail.com'},
]

app.get('/person/:id',(req,res)=>{
    const userId=req.params.id;
    res.send(person[userId])
})
app.get('/person',(req,res)=>{
    res.send(person)
})

app.post('/person',(req,res)=>{
    // console.log(req.body,'data-received');
    const user=req.body;
    user.id=22;
    res.send(user)
})

const port =process.env.PORT || 3000;

app.listen(port,()=>{console.log(`server is runnin on port ${port}`);})
