import { Service } from 'typedi';
import { BaseNote } from '../abstractions/classes/baseNote';
import { Note } from '../database/models/notes.model';
import { NoteRepository } from '../database/repositories/note.repository';

@Service()
export class NotepadService {
  constructor(private noteRepository: NoteRepository) {}

  //Add class validator
  //Add error handling
  async createNote(note: BaseNote) {
    return await this.noteRepository.createOne(note);
  }

  async load() {
    let titles = await this.noteRepository.getAllTitles();
    const firstDocument = await this.noteRepository.findOne(titles[0]._id);
    if (firstDocument) {
      titles[0].description = firstDocument.description;
    }
    return titles;
  }

  async displayNote(id: string) {
    return await this.noteRepository.findOne(id);
  }

  async deleteNote(id: string) {
    return await this.noteRepository.deleteOne(id);
  }

  async updateNote(id: string, data: Note) {
    return await this.noteRepository.updateOne(id, data);
  }
}
