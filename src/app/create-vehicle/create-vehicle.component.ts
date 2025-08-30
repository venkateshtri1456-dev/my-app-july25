import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VehicleService } from '../vehicle.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-vehicle',
  templateUrl: './create-vehicle.component.html',
  styleUrls: ['./create-vehicle.component.css']
})
export class CreateVehicleComponent {

  public vehicleForm:FormGroup=new FormGroup({
    Vehicle:new FormControl(),
    manufacturer:new FormControl(),
    model:new FormControl(),
    type:new FormControl(),
    fuel:new FormControl(),
    color:new FormControl(),
    image:new FormControl(),
    cost:new FormControl(),
    tyres:new FormControl(),
  });
id:number=0;
  constructor(private _vehicleService:VehicleService,private _router:Router, private _activatedRoute:ActivatedRoute){
_activatedRoute.params.subscribe((data:any)=>{
  console.log(data);
  this.id=data.id;
  console.log(this.id);

  _vehicleService.getSingleVehicle(this.id).subscribe((data:any)=>{
    console.log(data);
      this.vehicleForm.patchValue(data);
  }
    )
  })
}
  
  submit(){
    if(this.id){
      this._vehicleService.upadateVehicle(this.id,this.vehicleForm.value).subscribe((data:any)=>{
        console.log(data);
        alert("Vehicle updated successfully");
        this._router.navigateByUrl("/dashboard/vehicle");
      },(error:any)=>{
        alert("Internal Server Error!");
      }
    )
    }
    else{
   console.log(this.vehicleForm.value);
    this._vehicleService.createVehicle(this.vehicleForm.value).subscribe((data:any)=>{
      alert("Vehicle added successfully");
      this._router.navigateByUrl("/dashboard/vehicle");

    },(err:any)=>{
      alert("Internal Server Error");
    }

  )
}
}
}