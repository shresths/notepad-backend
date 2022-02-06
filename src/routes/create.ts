import { Request, Response, Router } from 'express';
import { Service } from 'typedi';
import { BaseNote } from '../abstractions/classes/baseNote';
import { NotepadService } from '../services/notepad.service';

@Service()
export class CreateRoute {
  createRoute: Router;
  constructor(private notepadService: NotepadService) {
    this.createRoute = Router();
  }

  getCreateRoute() {
    return this.createRoute.post(`/`, async (req: Request, res: Response) => {
      const noteData: BaseNote = req.body;
      const result = await this.notepadService.createNote(noteData);
      console.log('/ executed', result);
      if (result) {
        res.status(200).send('This will be used for creating the note');
      } else {
        res.status(503).send('Unsuccessful');
      }
    });
  }
}
