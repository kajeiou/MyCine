import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddOrEditFilmComponent } from './add-or-edit-film/add-or-edit-film.component';
import { MyFilmsComponent } from './my-films/my-films.component';

const routes: Routes = [
  { path: 'addAFilm', component: AddOrEditFilmComponent },
  { path: 'allMyFilms', component: MyFilmsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
