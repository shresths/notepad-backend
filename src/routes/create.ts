import { Request, Response, Router } from 'express';
import { Service } from 'typedi';
import { NoteRepository } from '../database/repositories/note.repository';

@Service()
export class CreateRoute {
  createRoute: Router;
  constructor(private noteRepository: NoteRepository) {
    this.createRoute = Router();
  }

  getCreateRoute() {
    return this.createRoute.post(`/`, async (req: Request, res: Response) => {
      console.log('/ executed');
      this.noteRepository.createOne({
        title: 'Hello',
        description: 'Ok ok',
        createdAt: undefined,
        updatedAt: undefined,
      });
      res.status(200).send('This will be used for creating the note');
    });
  }
}
