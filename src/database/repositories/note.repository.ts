import { Service } from 'typedi';
import { Note, NoteModel } from '../models/notes.model';
import { BaseRepository } from '../../database/repositories/base.repository';
import { IDatabaseModel } from '../../abstractions/interfaces/database-model.interface';
@Service()
export class NoteRepository extends BaseRepository<Note> {
  async findOne(id: string) {
    return await NoteModel.findOne({ _id: id });
  }

  async createOne(data: Note) {
    return await NoteModel.create(data);
  }

  async getAllTitles() {
    return await NoteModel.find({}, { title: 1, _id: 1 }).sort({
      createdAt: -1,
    });
  }

  async deleteOne(id: string) {
    return await NoteModel.deleteOne({ _id: id });
  }

  async updateOne(model: IDatabaseModel): Promise<any> {
    return await NoteModel.updateOne(
      { _id: model._id },
      { $set: { title: model.title, description: model.description } }
    );
  }
}
