import { Component } from '@angular/core';
import { PinInterestService } from '../pin-interest.service';

@Component({
  selector: 'app-pin-interest',
  templateUrl: './pin-interest.component.html',
  styleUrls: ['./pin-interest.component.css']
})
export class PinInterestComponent {
pinInterest:any[]=[];
 constructor(private _pinInterestServices:PinInterestService){
  _pinInterestServices.getpinInterest().subscribe((data:any)=>{
    console.log(data);
    this.pinInterest=data;
    console.log("pinInterest data:",this.pinInterest);
  },(err:any)=>{
    alert("Internal Server Error")
  })

 }



}

    
       

    