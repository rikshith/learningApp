import { Component, Input } from '@angular/core';
import { IGist } from '../notes-service/notes.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {
  @Input() data!: IGist;

  constructor() { }
}



