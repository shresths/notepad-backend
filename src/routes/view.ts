import { Request, Response, Router } from 'express';
import { Service } from 'typedi';

@Service()
export class ViewRoute {
  viewRoute: Router;
  constructor() {
    this.viewRoute = Router();
  }

  getViewRoute() {
    return this.viewRoute.get(`/`, async (req: Request, res: Response) => {
      console.log('/ executed');
      res.status(200).send('This will be used o view a particular note');
    });
  }
}
