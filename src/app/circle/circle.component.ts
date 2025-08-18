import { Component } from '@angular/core';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.css']
})
export class CircleComponent {

num1:number=0;
result:number=0;

area(){
  this.result= (Math.PI*this.num1*this.num1);
}
perimeter(){
  this.result=2*Math.PI*this.num1;
}

}
