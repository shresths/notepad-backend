import { getModelForClass, prop } from '@typegoose/typegoose';
import { BaseNote } from '../../abstractions/classes/baseNote';
import { IDatabaseModel } from '../../abstractions/interfaces/database-model.interface';

export class Note extends BaseNote implements IDatabaseModel {
  @prop({ required: true })
  title: string;

  @prop()
  description: string;

  @prop()
  createdAt: Date;

  @prop()
  updatedAt: Date;
}

export const NoteModel = getModelForClass(Note, {
  schemaOptions: { timestamps: true, collection: 'notes' },
});
