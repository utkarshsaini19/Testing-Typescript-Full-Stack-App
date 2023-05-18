import express from 'express'
import apiRouter from './router/apiRouter';
import userRouter from './router/userRouter';
import checkLogin from './middleware/checkLogin';
import cors from 'cors';
import path from 'path';






const app:express.Application = express()
app.use(cors())

const PORT:number = 5000;
app.use(express.json())
app.use(express.urlencoded({extended:false}))
/* app.use(checkLogin) if we want to apply middleware in all routes */


app.use('/api',apiRouter)
app.use('/user',userRouter)


app.listen(PORT,()=>{
    console.log("Server is running on PORT :",PORT);
    
})
