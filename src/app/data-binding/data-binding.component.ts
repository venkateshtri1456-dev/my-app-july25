import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {

  num1:number=0;
  num2:number=0;
  sum:number=0;

  addition(){
    this.sum=this.num1+this.num2;
    console.log(this.sum);
  }

  isDataPresent:Boolean=false;
  image_url:string='https://cdn-icons-png.flaticon.com/512/6478/6478111.png';

  name:string='Venkatesh';
  age:number=30;

  mobile:string='+91';

  greeting(){
    alert("Hello")
  }

  typing(){
    alert(this.mobile);
  }

  fruits(){
    alert("Fruit changed")
  }
}
