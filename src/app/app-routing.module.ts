import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddOrEditFilmComponent } from './add-or-edit-film/add-or-edit-film.component';
import { HomeComponent } from './home/home.component';
import { MyFilmsComponent } from './my-films/my-films.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component:HomeComponent},
  { path: 'addAFilm', component: AddOrEditFilmComponent },
  { path: 'allMyFilms', component: MyFilmsComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
