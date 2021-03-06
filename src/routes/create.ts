import { Request, response, Response, Router } from 'express';
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
      try {
        const noteData: BaseNote = req.body;
        const result = await this.notepadService.createNote(noteData);
        if (result._id) {
          res.status(200).send(result);
        } else {
          res
            .status(503)
            .send({ error: 'Error in creating new note', message: result });
        }
      } catch (e) {
        console.error('Error in creating note', e);
      }
    });
  }
}
