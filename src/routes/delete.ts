import { Request, Response, Router } from 'express';
import { Service } from 'typedi';
import { NotepadService } from '../services/notepad.service';

@Service()
export class DeleteRoute {
  deleteRoute: Router;
  constructor(private notepadService: NotepadService) {
    this.deleteRoute = Router();
  }

  getDeleteRoute() {
    try {
      return this.deleteRoute.delete(
        `/:id`,
        async (req: Request, res: Response) => {
          const noteId: string = req.params.id;
          const deleteResult = await this.notepadService.deleteNote(noteId);
          if (deleteResult && deleteResult.deletedCount) {
            res.status(200).send({
              status: 'success',
              message: `Note with id ${noteId} deleted successfully`,
            });
          } else {
            res
              .status(404)
              .send({ error: 'Error in deleting note', message: deleteResult });
          }
        }
      );
    } catch (e) {
      console.error('Error in deleting notes', e);
    }
  }
}
