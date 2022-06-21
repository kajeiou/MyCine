import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor() { }

  getFilms(): any [] {

    const films: { title: string; synopsis:string; rating: number }[] = [];
    films.push({ title: 'Un film', synopsis: 'Le synopsis', rating: 2 });
    films.push({ title: 'Un deuxième film', synopsis: 'Un deuxième synopsis', rating: 3 });
    return films;
  }
}
