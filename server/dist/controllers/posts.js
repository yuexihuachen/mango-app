"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostClass = void 0;
const index_1 = require("../schemas/index");
const response_1 = __importDefault(require("./response"));
class PostClass extends response_1.default {
    constructor() {
        super();
    }
    async create(req, res) {
        const { title, content, categoryId, published } = req.body;
        const createPost = new index_1.Post({
            title, content, categoryId, published
        });
        const data = await createPost.save();
        res.json(data);
    }
    async find(req, res) {
        const { query = {}, options = {} } = req.body;
        let titleRegex = {};
        if (query.title) {
            titleRegex = {
                title: {
                    $regex: new RegExp(`${query.title}`)
                }
            };
            delete query.title;
        }
        const data = await index_1.Post.find({
            ...query,
            ...titleRegex
        }, options);
        res.json(data);
    }
    async update(req, res) {
        const { _id, updatePostDto } = req.body;
        const updateData = await index_1.Post.updateOne({
            _id
        }, {
            $set: updatePostDto
        });
        res.json(updateData);
    }
    async delete(req, res) {
        const { _id } = req.body;
        res.json(await index_1.Post.deleteOne({ _id }));
    }
}
exports.PostClass = PostClass;
