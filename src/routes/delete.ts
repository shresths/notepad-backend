import { Request, Response, Router } from 'express';
import { Service } from 'typedi';
import { NotepadService } from '../services/notepad.service';

@Service()
export class DeleteRoute {
  deleteRoute: Router;
  constructor(private notepadService: NotepadService) {
    this.deleteRoute = Router();
  }

  getDeleteRoute() {
    return this.deleteRoute.delete(`/:id`, async (req: Request, res: Response) => {
      const noteId: string = req.params.id;
      const deleteDocument = await this.notepadService.deleteNote(noteId);
      if (deleteDocument) {
        res.status(200).send('Document deleted');
      }
    });
  }
}
