import { Component } from '@angular/core';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent {
  vehicle:any[]=[];
  constructor(private _vehicleService:VehicleService){
    _vehicleService.getVehicle().subscribe(
      (data:any)=>{
        console.log(data);
        this.vehicle=data;
        console.log("vehicle data:",this.vehicle);
      },(err:any)=>{
        alert("Internal Server Error");
      }

    )
  }

}
