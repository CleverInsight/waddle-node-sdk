import { Response } from "express";

const replySuccess = (res:Response, statusCode:any, message:any, data:any) => {
    res.status(statusCode || 200)
    .json({
        code: statusCode || 200,
        message: message || "success",
        data: data || {}
    });
}
 
const replyFail = (res:Response, statusCode:any, message:any, data:any) => {
    res.status(statusCode || 500)
    .json({
        code: statusCode || 500,
        message: message || "failed",
        data: data || {}
    });
}


export {
    replySuccess,
    replyFail
}