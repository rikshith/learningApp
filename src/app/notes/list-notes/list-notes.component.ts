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
  constructor(protected notesService: NotesService) { }

  dummy() {
    this.notesService.loadGist().subscribe({
      next: (res: HttpResponse<IGist[]>) => {
        this.notes = res.body?.map(gist => new Notes(gist.id, gist.url)) ?? [];
      },
      error: () => {
        console.log("error")
      },
    });
  }

  ngOnInit(): void {
    this.dummy();
  }

}



