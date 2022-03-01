import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IGist, NotesService } from '../notes-service/notes.service';
import { INotes, Notes } from './notes.model';


@Component({
  selector: 'app-list-notes',
  templateUrl: './list-notes.component.html',
  styleUrls: ['./list-notes.component.css']
})
export class ListNotesComponent implements OnInit {
  notes?: INotes[];
  gistData?: IGist[];
  constructor(protected notesService: NotesService) { }

  loadData() {
    this.notesService.loadGist().subscribe({
      next: (res: HttpResponse<IGist[]>) => {
        this.gistData = res.body as IGist[];
        this.notes = res.body?.map(gist => new Notes(gist.id, gist.url)) ?? [];
      },
      error: () => {
        console.log("error")
      },
    });
  }

  saveData(note: IGist) {
    this.gistData?.forEach(element => {
      if (element.id === note.id) {
        this.notesService.selectedGistData = element;
      }
    });
  }

  ngOnInit(): void {
    this.loadData();
  }
}




