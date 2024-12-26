"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const users_1 = require("../controllers/users");
const router = express_1.default.Router();
exports.router = router;
const users = new users_1.Users();
// Login User
router.post('/login', users.loginUser);
// refresh token
router.post('/refresh', users.refreshToken);
