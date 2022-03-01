import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListNotesComponent } from './notes/list-notes/list-notes.component';
import { NotesRoutingModule } from './notes/notes-routing.module';

const routes: Routes = [
  {
    path: '', component: ListNotesComponent
  },
  {
    path: 'notes', loadChildren: () => import('./notes/notes.module').then(m => m.NotesModule)
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    NotesRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
