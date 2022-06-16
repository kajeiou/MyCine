import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-my-films',
  templateUrl: './my-films.component.html',
  styleUrls: ['./my-films.component.scss']
})
export class MyFilmsComponent implements OnInit {

  @Input('parentData') public movies: any;
  constructor() { }

  ngOnInit(): void {
  }
  rateMovie() {
    console.log("rate")
  }
  editeMovie() {
    console.log("edite")
  }
  deleteMovie() {
    console.log("delete")
  }
}
