"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.replyFail = exports.replySuccess = void 0;
const replySuccess = (res, statusCode, message, data) => {
    res.status(statusCode || 200)
        .json({
        code: statusCode || 200,
        message: message || "success",
        data: data || {}
    });
};
exports.replySuccess = replySuccess;
const replyFail = (res, statusCode, message, data) => {
    res.status(statusCode || 500)
        .json({
        code: statusCode || 500,
        message: message || "failed",
        data: data || {}
    });
};
exports.replyFail = replyFail;
//# sourceMappingURL=helper.js.map