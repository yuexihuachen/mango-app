import { Hono } from 'hono';
import Note from '@/controller/note';

const note = new Hono()
const noteController = new Note();

note.post('/auth/note/create', noteController.create);
note.post('/auth/note/update', noteController.update);
note.post('/note/find', noteController.find);
note.post('/note/findAll', noteController.findAll);
note.post('/auth/note/delete', noteController.delete);

export {
  note
}


