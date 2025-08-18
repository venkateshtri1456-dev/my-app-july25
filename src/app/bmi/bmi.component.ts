import { Component } from '@angular/core';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.css']
})
export class BmiComponent {
 
  weight:number=0;
  height:number=0;
  result:number=0;
  result2:string='';

  bmi(){
    this.result=Math.floor(this.weight/(this.height*this.height));
     if ((this.result>0)&&(this.result<18.5)){
   this.result2= ("You are underweight");
  } 
  else if((this.result>=18.5)&&(this.result<=24.9)){
    this. result2=("You are Normal");
  }
 else if((this.result>=18.5)&&(this.result<=24.9)){
     this.result2=("You are Normal");
      }
      else if((this.result>=25)&&(this.result<=29.9)){
     this.result2=("You are overweight");

      }
      else if((this.result>=30)&&(this.result<=34.9)){
    this. result2=("You are obess");
      }
      else  {
     this.result2=("You are Extremely obess");
      }
    }
  }

