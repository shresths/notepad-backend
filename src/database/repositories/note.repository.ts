import { Service } from 'typedi';
import { Note, NoteModel } from '../models/notes.model';
import { BaseRepository } from '../../database/repositories/base.repository';
@Service()
export class NoteRepository extends BaseRepository<Note> {
  async findOne(id: string) {
    return await NoteModel.findOne({ id });
  }

  async createOne(note: Note) {
    return await NoteModel.create(note);
  }
}
