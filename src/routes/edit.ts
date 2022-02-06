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
      const noteId: string = req.params.id;
      const noteData: Note = req.body;
      if (noteId && noteData) {
        const updateNote = await this.notepadService.updateNote(
          noteId,
          noteData
        );
        res.status(200).send(updateNote);
      }
    });
  }
}
