import { Request, Response, Router } from 'express';
import { Service } from 'typedi';

@Service()
export class IndexRoute {
  indexRoute: Router;
  constructor() {
    this.indexRoute = Router();
  }

  getIndexRoute() {
    return this.indexRoute.get(`/`, async (req: Request, res: Response) => {
      res.status(200).send('This is the Notepad Backend');
    });
  }
}
