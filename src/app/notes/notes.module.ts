import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotesRoutingModule } from './notes-routing.module';
import { AddNotesComponent } from './add-notes/add-notes.component';
import { ListNotesComponent } from './list-notes/list-notes.component';
import { ViewComponent } from './view/view.component';
import { ListViewComponent } from './list-view/list-view.component';


@NgModule({
  declarations: [
    AddNotesComponent,
    ListNotesComponent,
    ViewComponent,
    ListViewComponent
  ],
  imports: [
    CommonModule,
    NotesRoutingModule
  ]
})
export class NotesModule { }
