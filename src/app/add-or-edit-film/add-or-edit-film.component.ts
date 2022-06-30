import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FilmService } from '../@shared/services/film.service';
import { Film } from '../@shared/models/film';
@Component({
  selector: 'app-add-or-edit-film',
  templateUrl: './add-or-edit-film.component.html',
  styleUrls: ['./add-or-edit-film.component.scss']
})
export class AddOrEditFilmComponent implements OnInit {

  movieForm = new FormGroup({
    titleField: new FormControl('',Validators.required),
    synopsisField: new FormControl(),
    ratingField: new FormControl<number |null>(null, [Validators.min(0),Validators.max(5), Validators.maxLength(1)])
  });
  @Output() onSave: EventEmitter<any> = new EventEmitter();
  message: boolean = false;
  constructor(private FilmService:FilmService) { }

  submitForm() {
    /*this.FilmService.addFilm( {
      title: this.movieForm.controls.titleField.value,
      synopsis: this.movieForm.controls.synopsisField.value,
      rating: this.movieForm.controls.ratingField.value
    });*/
    var newFilm = {
      title: this.movieForm.controls.titleField.value,
      synopsis: this.movieForm.controls.synopsisField.value,
      rating: this.movieForm.controls.ratingField.value
    } as Film;
    this.FilmService.addFilm(newFilm).subscribe( res => {
      console.log(res);
    });
    this.showMessageSuccess();
  }
  showMessageSuccess(){

    var that = this;
    this.message = true;

    setTimeout(function(){
      that.message = false;
    },4000);

  }

  ngOnInit(): void {
  }

}
