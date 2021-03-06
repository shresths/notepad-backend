import { Request, Response, Router } from 'express';
import { Service } from 'typedi';
import { Note } from '../database/models/notes.model';
import { NotepadService } from '../services/notepad.service';

@Service()
export class EditRoute {
  editRoute: Router;
  constructor(private notepadService: NotepadService) {
    this.editRoute = Router();
  }

  getEditRoute() {
    return this.editRoute.put(`/:id`, async (req: Request, res: Response) => {
      try {
        const noteId: string = req.params.id;
        const noteData: Note = req.body;
        if (noteId && noteData) {
          const updateNote = await this.notepadService.updateNote(
            noteId,
            noteData
          );
          if (updateNote && updateNote.modifiedCount) {
            res.status(200).send({
              status: 'success',
              message: `Note with id ${noteId} updated successfully`,
            });
          } else {
            res
              .status(503)
              .send({ error: 'Error in updating note', message: updateNote });
          }
        }
      } catch (e) {
        console.error('Error in updating note', e);
      }
    });
  }
}
