import express from 'express'
import apiRouter from './router/apiRouter';
import userRouter from './router/userRouter';
import checkLogin from './middleware/checkLogin';
import cors from 'cors';
import path from 'path';



const newPath = process.argv[1].substring(0,process.argv[1].lastIndexOf('server')-1)





const app:express.Application = express()
app.use(cors())

const PORT:number = 5000;
app.use(express.json())
app.use(express.urlencoded({extended:false}))
/* app.use(checkLogin) if we want to apply middleware in all routes */


app.use('/api',apiRouter)
app.use('/user',userRouter)

app.use(express.static(path.join(newPath, "demoapp","build")));
    app.get("*", function (_, res) {
      res.sendFile(
        path.join(newPath, "demoapp","build","index.html"),
        function (err) {
          res.status(500).send(err);
        }
      );
    });

app.listen(PORT,()=>{
    console.log("Server is running on PORT :",PORT);
    
})