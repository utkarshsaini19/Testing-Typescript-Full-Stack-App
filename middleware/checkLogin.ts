import express from 'express'

const checkLogin = (request:express.Request,response:express.Response,next:express.NextFunction) => {
    console.log(request.body);
    next()
    
}

export default checkLogin