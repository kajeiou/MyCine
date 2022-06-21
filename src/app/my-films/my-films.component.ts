import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FilmService } from '../film.service';

@Component({
  selector: 'app-my-films',
  templateUrl: './my-films.component.html',
  styleUrls: ['./my-films.component.scss']
})
export class MyFilmsComponent implements OnInit {

  @Input('parentData') public movies: any;

  constructor(private FilmService:FilmService) { }

  ngOnInit(): void {
    this.movies = this.FilmService.getFilms();
  }
  rateMovie(indexOfelement: number) {
    console.log("rating")
    console.log(indexOfelement);
  }
  editeMovie(indexOfelement: number) {
    console.log("edite")
    console.log(indexOfelement);
  }
  deleteMovie(indexOfelement: number) {
    console.log("delete")
    console.log(indexOfelement);
    this.movies.splice(indexOfelement,1)
  }
}
