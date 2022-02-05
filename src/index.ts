import 'reflect-metadata';
require('dotenv').config();
import Container, { Service } from 'typedi';
import express from 'express';
import { MongoService } from './services/mongo.service';
import { IndexRoute } from './routes/index';
import { CreateRoute } from './routes/create';
import { EditRoute } from './routes/edit';
import { DeleteRoute } from './routes/delete';
import { LoadRoute } from './routes/load';
import { ViewRoute } from './routes/view';

@Service()
class Application {
  constructor(
    private mongoService: MongoService,
    private indexRoute: IndexRoute,
    private createRoute: CreateRoute,
    private editRoute: EditRoute,
    private deleteRoute: DeleteRoute,
    private loadRoute: LoadRoute,
    private viewRoute: ViewRoute
  ) {
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

    app.use('/', this.indexRoute.getIndexRoute());
    app.use('/create', this.createRoute.getCreateRoute());
    app.use('/delete', this.deleteRoute.getDeleteRoute());
    app.use('/edit', this.editRoute.getEditRoute());
    app.use('/load', this.loadRoute.getLoadRoute());
    app.use('/view', this.viewRoute.getViewRoute());

    console.log('Anything is long as I can see your face!');
  }
}

export const application = Container.get(Application);
