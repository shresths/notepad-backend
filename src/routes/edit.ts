import { Request, Response, Router } from 'express';
import { Service } from 'typedi';

@Service()
export class EditRoute {
  editRoute: Router;
  constructor() {
    this.editRoute = Router();
  }

  getEditRoute() {
    return this.editRoute.put(`/`, async (req: Request, res: Response) => {
      console.log('/ executed');
      res.status(200).send('This will be used to edit the note');
    });
  }
}