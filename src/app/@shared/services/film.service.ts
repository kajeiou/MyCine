import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Film } from '../models/film';

@Injectable({
  providedIn: 'root'
})
//implements Films
export class FilmService {
  private url = "http://localhost:2000"

  private films:Film[] = [];

  constructor(private http:HttpClient) { }

  ngOnInit() {

  }
  getFilms() {
    /*this.films.push({ title: 'Un film', synopsis: 'Le synopsis', rating: 2 });
    this.films.push({ title: 'Un deuxième film', synopsis: 'Un deuxième synopsis', rating: 3 });*/
    return this.http.get<Film[]>(this.url + "/films");
  }

  getFilm(indexOfElement:number):Observable<any> {
    return this.http.get<Film>(this.url + "/film/"+indexOfElement)
  }

  addFilm(newFilm:Film):Observable<any> {
    //this.films.push({title: newFilm.title, synopsis: newFilm.synopsis, rating: newFilm.rating });
    
   return this.http.post(this.url + "/film",newFilm);
    console.log(newFilm);

  }
  editeFilm(Film:Film) {
    return this.http.put(this.url + "/film/" + Film.id, Film)
  }
  deleteFilm(indexOfElement: number):Observable<any> {
    console.log("Deleting movie " + indexOfElement)
    return this.http.delete(this.url + "/film/"+indexOfElement)
  }

}
