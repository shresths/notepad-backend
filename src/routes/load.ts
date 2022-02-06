import { Request, Response, Router } from 'express';
import { Service } from 'typedi';
import { NotepadService } from '../services/notepad.service';

@Service()
export class LoadRoute {
  loadRoute: Router;
  constructor(private notepadService: NotepadService) {
    this.loadRoute = Router();
  }

  getLoadRoute() {
    return this.loadRoute.get(`/`, async (req: Request, res: Response) => {
      try {
        const result = await this.notepadService.load();
        if (result) {
          res.status(200).send(result);
        } else {
          res.status(503).send({ error: 'Error in loading notes' });
        }
      } catch (e) {
        console.error('Error in loading notes', e);
      }
    });
  }
}
