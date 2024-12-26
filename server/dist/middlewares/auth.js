"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authGuard = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const constants_1 = require("../constants/constants");
// Protect Route for Authenticated Users
const authGuard = (req, res, next) => {
    let token = '', response;
    if (req.header('Authorization') &&
        req.header('Authorization')?.startsWith('Bearer')) {
        try {
            token = req.header('Authorization')?.replace(/Bearer\s+/i, '');
            const user = jsonwebtoken_1.default.verify(token, process.env.AT_SECRET);
            if (!user) {
                response = constants_1.CONSTANTS.INVALID_ACCESS_TOKEN;
            }
        }
        catch (err) {
            response = constants_1.CONSTANTS.INVALID_ACCESS_TOKEN;
        }
    }
    else {
        response = constants_1.CONSTANTS.INVALID_ACCESS_TOKEN;
    }
    if (response) {
        res.json(response);
    }
    else {
        next();
    }
};
exports.authGuard = authGuard;
