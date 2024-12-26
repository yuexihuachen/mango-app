"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const posts_1 = require("../controllers/posts");
const router = express_1.default.Router();
exports.router = router;
const post = new posts_1.PostClass();
// create Post
router.post('/auth/post/create', post.create);
// find Post
router.post('/post/find', post.find);
// update post
router.post('/auth/post/update', post.update);
// delete post
router.post('/auth/post/delete', post.delete);
