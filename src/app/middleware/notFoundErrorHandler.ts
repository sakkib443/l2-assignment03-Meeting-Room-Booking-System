/* eslint-disable no-unused-vars */
import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";


// eslint-disable-next-line @typescript-eslint/no-unused-vars
const notFoundErrorHandler = (req:Request, res:Response, next:NextFunction)=>{
    res.status(httpStatus.NOT_FOUND).json({
        success: false,
        message: 'Api not found',
        err: ''
    })
}

export default notFoundErrorHandler;