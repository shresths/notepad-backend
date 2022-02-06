import 'reflect-metadata';
require('dotenv').config();
import Container, { Service } from 'typedi';
import express from 'express';
import { IndexRoute } from './routes/index';
import { CreateRoute } from './routes/create';
import { EditRoute } from './routes/edit';
import { DeleteRoute } from './routes/delete';
import { LoadRoute } from './routes/load';
import { ViewRoute } from './routes/view';

@Service()
class Application {
  constructor(
    private indexRoute: IndexRoute,
    private createRoute: CreateRoute,
    private editRoute: EditRoute,
    private deleteRoute: DeleteRoute,
    private loadRoute: LoadRoute,
    private viewRoute: ViewRoute
  ) {
    this.process();
  }

  async process() {
    try {
      const app = express();
      const PORT = parseInt(process.env.PORT) || 5000;

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
    } catch (e) {
      console.error('Error in application', e);
    }
  }
}

export const application = Container.get(Application);
