import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FilmService } from '../@shared/services/film.service';
import { Film } from '../@shared/models/film';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-edit-film',
  templateUrl: './edit-film.component.html',
  styleUrls: ['./edit-film.component.scss']
})
export class EditFilmComponent implements OnInit {

  message: boolean = false;
  movieForm = new FormGroup({
    titleField: new FormControl('',Validators.required),
    synopsisField: new FormControl(),
    ratingField: new FormControl<number |null>(null, [Validators.min(0),Validators.max(5), Validators.maxLength(1)])
  });
  submitForm() {
    var newFilm = {
      title: this.movieForm.controls.titleField.value,
      synopsis: this.movieForm.controls.synopsisField.value,
      rating: this.movieForm.controls.ratingField.value
    } as Film;
    this.FilmService.editeFilm(newFilm).subscribe( res => {
      console.log(res);
    });
    this.showMessageSuccess();
    this.dialogRef.close();
  }
  
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private FilmService:FilmService, private dialogRef: MatDialogRef<EditFilmComponent>) { }

  ngOnInit(): void {
    this.FilmService.getFilm(this.data.id).subscribe(film => {
      console.log()
      this.movieForm.controls.titleField.setValue(film.result[0].title)
      this.movieForm.controls.synopsisField.setValue(film.result[0].synopsis)
      this.movieForm.controls.ratingField.setValue(film.result[0].rating)
     });
    
  }

  showMessageSuccess(){

    var that = this;
    this.message = true;

    setTimeout(function(){
      that.message = false;
    },4000);

  }
}
