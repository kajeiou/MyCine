import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MyCineV2';
  movies : any = [];
  addMovie(movie: any) {
    this.movies.push(movie);
  }
}
