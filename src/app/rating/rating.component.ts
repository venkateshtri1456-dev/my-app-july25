import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent {

@Input() rating:number=0;
@Output() ratingClicked=new EventEmitter<number>();

onClick(newRating:number){
  this.rating=newRating;
  this.ratingClicked.emit(this.rating);
}


}
