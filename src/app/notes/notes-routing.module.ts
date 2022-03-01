import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNotesComponent } from './add-notes/add-notes.component';
import { ListNotesComponent } from './list-notes/list-notes.component';
import { ListViewComponent } from './list-view/list-view.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  { path: '', component: ListNotesComponent },
  { path: 'add', component: AddNotesComponent },
  { path: 'view/:id', component: ListViewComponent }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotesRoutingModule {

}


