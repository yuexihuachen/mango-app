import { Hono } from 'hono';
import Note from '@/controller/note';

const note = new Hono()
const noteController = new Note();

note.post('/auth/note/create', noteController.create);
note.post('/auth/note/update', noteController.update);
note.post('/note/find', noteController.find);
note.post('/note/groupByFields', noteController.groupByFields);
note.post('/note/findAll', noteController.findAll);
note.post('/auth/note/find', noteController.find);
note.post('/auth/note/findAll', noteController.authFindAll);
note.post('/auth/note/delete', noteController.delete);
note.post('/note/archiveNote', noteController.archiveNote);
note.post('/note/blogNote', noteController.blogNote);

export {
  note
}


