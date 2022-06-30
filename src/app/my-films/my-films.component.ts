import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { Film } from '../@shared/models/film';
import { FilmService } from '../@shared/services/film.service';
import { MatDialog } from '@angular/material/dialog';
import { EditFilmComponent } from '../edit-film/edit-film.component';
@Component({
  selector: 'app-my-films',
  templateUrl: './my-films.component.html',
  styleUrls: ['./my-films.component.scss']
})
export class MyFilmsComponent implements OnInit {

  //@Input('parentData') public movies: any;
  movies: Film[] = [];

  constructor(private FilmService:FilmService, private dialog:MatDialog) { }

  ngOnInit(): void {
     this.FilmService.getFilms().subscribe(films => {
      this.movies = films;
     });
  }
  rateMovie(indexOfelement: number) {
    console.log("rating")
    console.log(indexOfelement);
  }
  editeMovie(indexOfelement: number) {

    console.log("edite")
    console.log(indexOfelement);
    
    const dialogRef = this.dialog.open(EditFilmComponent, {
      data: {id: indexOfelement}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });

  }
  deleteMovie(indexOfelement: number) {
    this.FilmService.deleteFilm(indexOfelement).subscribe(res => {
      this.movies.splice(indexOfelement,1)
      this.FilmService.getFilms().subscribe(films => {
        this.movies = films;
       });
      });
      
  }
}
