import { Service } from 'typedi';
import { Note, NoteModel } from '../models/notes.model';
import { BaseRepository } from '../../database/repositories/base.repository';
import { IDatabaseModel } from '../../abstractions/interfaces/database-model.interface';
@Service()
export class NoteRepository extends BaseRepository<Note> {
  async findOne(id: string) {
    try {
      return await NoteModel.findOne({ _id: id });
    } catch (e) {
      console.error(e);
      return e;
    }
  }

  async createOne(data: Note) {
    try {
      return NoteModel.create(data);
    } catch (e) {
      console.error(e);
      return e;
    }
  }

  async getAllTitles() {
    try {
      return await NoteModel.find({}, { title: 1, _id: 1 }).sort({
        updatedAt: -1,
      });
    } catch (e) {
      console.error(e);
      return e;
    }
  }

  async deleteOne(id: string) {
    try {
      return await NoteModel.deleteOne({ _id: id });
    } catch (e) {
      console.error(e);
      return e;
    }
  }

  async updateOne(id: string, model: IDatabaseModel): Promise<any> {
    try {
      return await NoteModel.updateOne({ _id: id }, { $set: model });
    } catch (e) {
      console.error(e);
      return e;
    }
  }
}
