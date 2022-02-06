import { Service } from 'typedi';
import { BaseNote } from '../abstractions/classes/baseNote';
import { NoteRepository } from '../database/repositories/note.repository';

@Service()
export class NotepadService {
  constructor(private noteRepository: NoteRepository) {}

  //Add class validator
  //Add error handling
  async createNote(note: BaseNote) {
    return await this.noteRepository.createOne(note);
  }
}
