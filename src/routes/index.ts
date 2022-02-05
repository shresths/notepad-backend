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
      console.log('/ executed');
      res.status(200).send('Tell me, do you play?');
    });
  }
}
