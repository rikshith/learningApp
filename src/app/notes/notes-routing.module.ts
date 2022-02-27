import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNotesComponent } from './add-notes/add-notes.component';
import { ListNotesComponent } from './list-notes/list-notes.component';

const routes: Routes = [
  { path: '', component: ListNotesComponent },
  { path: 'add', component: AddNotesComponent }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotesRoutingModule {

}


