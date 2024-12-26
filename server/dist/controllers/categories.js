"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryClass = void 0;
const category_schema_1 = require("../schemas/category.schema");
/**
 * 注意mongoose的版本问题
 */
class CategoryClass {
    async create(req, res) {
        const { name, alias } = req.body;
        const createCategory = new category_schema_1.Category({
            name, alias
        });
        const data = await createCategory.save();
        res.json(data);
    }
    async findAll(req, res) {
        const { query = {}, options = {} } = req?.body || {};
        const data = await category_schema_1.Category.find(query, options);
        res.json(data);
    }
    async update(req, res) {
        const { _id, updateCategoryDto } = req.body;
        const updateData = await category_schema_1.Category.updateOne({
            _id
        }, {
            $set: updateCategoryDto
        });
        res.json(updateData);
    }
    async delete(req, res) {
        const { _id } = req.body;
        res.json(await category_schema_1.Category.deleteOne({ _id }));
    }
}
exports.CategoryClass = CategoryClass;
