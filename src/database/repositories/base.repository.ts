import { Service } from 'typedi';
import { IDatabaseModel } from '../../abstractions/interfaces/database-model.interface';
import { MongoService } from '../mongo.database';

@Service()
export abstract class BaseRepository<T> {
  constructor(protected databaseConnection: MongoService) {
    this.databaseConnection.createConnection();
  }
  findOne?(id: string): Promise<T>;
  pushOne?(model: IDatabaseModel): Promise<T>;
  updateOne?(model: IDatabaseModel): Promise<T>;
  createOne?(data: any): Promise<T>;
}
