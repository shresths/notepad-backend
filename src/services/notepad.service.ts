import { Service } from 'typedi';
import { BaseNote } from '../abstractions/classes/baseNote';
import { Note } from '../database/models/notes.model';
import { NoteRepository } from '../database/repositories/note.repository';

@Service()
export class NotepadService {
  constructor(private noteRepository: NoteRepository) {}

  async createNote(note: BaseNote) {
    const validateData = this.payloadValidation(note);
    if (!validateData.status) return validateData.message;
    return this.noteRepository.createOne(note);
  }

  async load() {
    try {
      let titles = await this.noteRepository.getAllTitles();
      if (!titles[0]) {
        return [];
      }
      const firstDocument = await this.noteRepository.findOne(titles[0]._id);
      if (firstDocument) {
        titles[0].description = firstDocument.description;
      }
      return titles;
    } catch (e) {
      console.error(e);
    }
  }

  async displayNote(id: string) {
    return this.noteRepository.findOne(id);
  }

  async deleteNote(id: string) {
    return this.noteRepository.deleteOne(id);
  }

  async updateNote(id: string, data: Note) {
    const validateData = this.payloadValidation(data);
    if (!validateData.status) return validateData.message;
    return this.noteRepository.updateOne(id, data);
  }

  payloadValidation(note: BaseNote) {
    if (!note.title && !note.description) {
      return {
        status: false,
        message: 'Note must contain either title or description',
      };
    }
    if (typeof note.title != 'string' || typeof note.description != 'string') {
      return {
        status: false,
        message: 'title and description must be of type string',
      };
    }
    return { status: true };
  }
}
