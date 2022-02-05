import { Request, Response, Router } from 'express';
import { Service } from 'typedi';

@Service()
export class DeleteRoute {
  deleteRoute: Router;
  constructor() {
    this.deleteRoute = Router();
  }

  getDeleteRoute() {
    return this.deleteRoute.delete(`/`, async (req: Request, res: Response) => {
      console.log('/ executed');
      res.status(200).send('This is used for deleting the route');
    });
  }
}