import { Request, Response, Router } from 'express';
import { Service } from 'typedi';

@Service()
export class LoadRoute {
  loadRoute: Router;
  constructor() {
    this.loadRoute = Router();
  }

  getLoadRoute() {
    return this.loadRoute.get(`/`, async (req: Request, res: Response) => {
      console.log('/ executed');
      res.status(200).send('This will be used to load all the titles in the notepad');
    });
  }
}