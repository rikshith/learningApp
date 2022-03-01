import { Component } from '@angular/core';
import { IGist, NotesService } from '../notes-service/notes.service';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent {
  gistData: IGist;

  constructor(private notesService: NotesService) {
    this.gistData = this.notesService.selectedGistData;
  }

}
