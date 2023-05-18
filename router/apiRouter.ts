import express from 'express'

const apiRouter:express.Router = express.Router();

apiRouter.get('/',(request:express.Request,response:express.Response)=>{
    response.status(200).json({hello:"hello"})
})

apiRouter.get('/test',(request:express.Request,response:express.Response)=>{
    response.status(200).send("<h1>Hello from api/test get!<h1>")
})

export default apiRouter;
