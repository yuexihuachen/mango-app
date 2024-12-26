"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const categories_1 = require("../controllers/categories");
const router = express_1.default.Router();
const category = new categories_1.CategoryClass();
// create Post
router.post('/auth/category/create', category.create);
// find Post
router.post('/category/find', category.findAll);
// update post
router.post('/auth/category/update', category.update);
// delete post
router.post('/auth/category/delete', category.delete);
exports.default = router;
