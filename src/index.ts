import 'reflect-metadata';
require('dotenv').config();
import Container, { Service } from 'typedi';
import express from 'express';
import { Request, Response } from 'express';
import { MongoService } from './services/mongo.service';

@Service()
class Application {
  constructor(private mongoService: MongoService) {
    this.mongoService.createConnection();
    this.process();
  }

  async process() {
    const app = express();
    const PORT = process.env.APP_PORT || 3000;

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.listen(PORT, () => {
      console.log(`App listening on port ${PORT}`);
    });

    app.get(`/`, async (req: Request, res: Response) => {
      console.log("/ executed")
      res.status(200).send('Tell me, do you play?');
    });

    console.log('Anything is long as I can see your face');
  }
}

export const application = Container.get(Application);
