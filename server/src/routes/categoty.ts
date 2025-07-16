import { Hono } from 'hono';
import Category from '@/controller/category';

const category = new Hono();
const categoryController = new Category();

category.post('/auth/category/create', categoryController.create);
category.post('/auth/category/update', categoryController.update);
category.post('/category/find', categoryController.find);
category.post('/auth/category/find', categoryController.find);
category.post('/auth/category/delete', categoryController.delete);

export {
    category
}

