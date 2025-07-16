import { Hono } from 'hono';
import Tag from '@/controller/tag';

const tag = new Hono();
const tagController = new Tag();

tag.post('/auth/tag/create', tagController.create);
tag.post('/auth/tag/update', tagController.update);
tag.post('/tag/find', tagController.find);
tag.post('/auth/tag/find', tagController.find);
tag.post('/auth/tag/delete', tagController.delete);

export {
    tag
}

