import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotesRoutingModule } from './notes/notes-routing.module';

const routes: Routes = [
  {
    path: '', loadChildren: () => import('./notes/list-notes/list-notes.component').then(m => m.ListNotesComponent)
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
