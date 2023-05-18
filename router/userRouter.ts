import express, { Request, Response } from 'express'
import checkLogin from '../middleware/checkLogin';

const userRouter = express.Router();

userRouter.get('/',(request:Request,response:Response)=>{
    response.status(200).send("<h1>Hello from user get!<h1>")
})

// To check the form data
// url : http://localhost:5000/user/login
// method : POST
userRouter.post('/login',checkLogin,(request:Request,response:Response)=>{
    let formData = request.body;
    response.status(200).json(formData)
})

export default userRouter;