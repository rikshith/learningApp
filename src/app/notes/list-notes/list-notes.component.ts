import { Component, OnInit } from '@angular/core';
import { empty } from 'rxjs'
import { INotes, Notes } from './notes.model';


@Component({
  selector: 'app-list-notes',
  templateUrl: './list-notes.component.html',
  styleUrls: ['./list-notes.component.css']
})
export class ListNotesComponent implements OnInit {
  notes?: INotes[];
  data?: any;
  constructor() {

  }

  dummy() {
    return [new Notes(1, 'one'), new Notes(2, 'two'), new Notes(3, 'three'), new Notes(4, 'four')];
    //return [];

  }

  ngOnInit(): void {
    this.notes = this.dummy();

    // console.log(this.datas);
    this.notes?.forEach((eachElement, i) => {
      console.log(eachElement.content, i);
    });
  }
}



