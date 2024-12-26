"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users = void 0;
const index_1 = require("../schemas/index");
const constants_1 = require("../constants/constants");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const getTokens = (user) => {
    // at Token expires 6 hours
    const atExpires = "6 h";
    // const atExpires: number =  Math.floor(Date.now() / 1000) + 60 * 1;
    // rt Token expires 7 days
    const rtExpires = "7 d";
    // const rtExpires: number = Math.floor(Date.now() / 1000) + 60 * 7;
    const payload = { _id: user._id, username: user.username };
    /* eslint-disable */
    const at = jsonwebtoken_1.default.sign(payload, process.env.AT_SECRET, { expiresIn: atExpires });
    const rt = jsonwebtoken_1.default.sign(payload, process.env.RT_SECRET, { expiresIn: rtExpires });
    return {
        at,
        rt,
    };
};
class Users {
    async loginUser(req, res) {
        const { username, password } = req.body;
        const user = await index_1.User.findOne({ username, password });
        let response = {
            code: -1,
            data: "No user found with this username",
            message: "failed",
        };
        if (user) {
            const tokenUser = {
                _id: user._id,
                username: user.username,
            };
            const { at, rt } = getTokens(tokenUser);
            res.cookie("at", at);
            res.cookie("rt", rt);
            response = {
                code: 0,
                data: {
                    at,
                    rt,
                },
                message: "success",
            };
        }
        res.json(response);
    }
    async refreshToken(req, res) {
        const { refreshToken } = req.body;
        let newToken = constants_1.CONSTANTS.INVALID_REFRESH_TOKEN;
        const verifyUser = await jsonwebtoken_1.default.verify(refreshToken, process.env.RT_SECRET);
        if (!verifyUser) {
            newToken = constants_1.CONSTANTS.INVALID_REFRESH_TOKEN;
        }
        else {
            try {
                const { at, rt } = getTokens(verifyUser);
                res.cookie("at", at);
                res.cookie("rt", rt);
                newToken = constants_1.CONSTANTS.SUCCESS;
            }
            catch (err) {
                newToken = constants_1.CONSTANTS.INVALID_REFRESH_TOKEN;
            }
        }
        res.json(newToken);
    }
}
exports.Users = Users;
