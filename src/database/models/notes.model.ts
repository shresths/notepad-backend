import { getModelForClass, prop } from '@typegoose/typegoose';
import { BaseNote } from '../../abstractions/classes/baseNote';
import { IDatabaseModel } from '../../abstractions/interfaces/database-model.interface';

export class Note extends BaseNote implements IDatabaseModel {
  @prop()
  title: string;

  @prop()
  description: string;
}

export const NoteModel = getModelForClass(Note, {
  schemaOptions: { timestamps: true, collection: 'notes' },
});
