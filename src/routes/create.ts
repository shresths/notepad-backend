import { Request, Response, Router } from 'express';
import { Service } from 'typedi';

@Service()
export class CreateRoute {
  createRoute: Router;
  constructor() {
    this.createRoute = Router();
  }

  getCreateRoute() {
    return this.createRoute.post(`/`, async (req: Request, res: Response) => {
      console.log('/ executed');
      res.status(200).send('This will be used for creating the note');
    });
  }
}