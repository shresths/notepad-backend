import { mongoConfig } from '../config/mongo.config';
import mongoose = require('mongoose');
import { Service } from 'typedi';

/**
 * Service to create mongo connection with MongoDB
 */
@Service()
export class MongoService {
  constructor() {}

  /**
   * Function to create connection with MongoDB
   */
  async createConnection(): Promise<void> {
    try {
      await mongoose
        .connect(mongoConfig.host + mongoConfig.database)
        .then(() => console.log('Mongodb started!'));
    } catch (e) {
      console.error('Error in connecting database', e);
    }
  }
}
