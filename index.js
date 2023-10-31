const express = require('express');
const { userRouter } = require('./router/userRouter');
const cors = require('cors');

const app = express();
const PORT = 9000;

app.use(cors({
    origin:"*"
}))

app.use(express.json()) //body parser
app.use('/api',userRouter);

app.get("/",(req,res) =>{
    return res.send("API STATUS OK")
})

app.listen(PORT,() =>{
    try{
    console.log(`Server running at port: ${PORT}`)
    }
    catch(error){
        console.log(`error:${error}`)
    }
})