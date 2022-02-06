import { Request, Response, Router } from 'express';
import { Service } from 'typedi';
import { NotepadService } from '../services/notepad.service';

@Service()
export class ViewRoute {
  viewRoute: Router;
  constructor(private notepadService: NotepadService) {
    this.viewRoute = Router();
  }

  getViewRoute() {
    return this.viewRoute.get(`/:id`, async (req: Request, res: Response) => {
      const noteId = req.params.id;
      const note = await this.notepadService.displayNote(noteId);
      if (note) {
        res.status(200).send(note);
      }
    });
  }
}
