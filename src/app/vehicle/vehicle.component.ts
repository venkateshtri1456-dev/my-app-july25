import { Component } from '@angular/core';
import { VehicleService } from '../vehicle.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent {
  vehicle:any[]=[];

  constructor(private _vehicleService:VehicleService, private _router:Router)
  {

  this.loadvehicle();
  }

  loadvehicle(){
   this._vehicleService.getVehicle().subscribe(
      (data:any)=>{
        console.log(data);
        this.vehicle=data;
        console.log("vehicle data:",this.vehicle);
      },(err:any)=>{
        alert("Internal Server Error");
      }
    
    )
  }
  searchKeyword:string='';
  search(){
    // alert(this.term)
    this._vehicleService.getFilteredVehicle(this.searchKeyword).subscribe((data:any)=>{
      console.log(data);
      this.vehicle=data;
    },(err:any)=>{
      alert("Internal Server Error!");
    }
  )
  }

  // sorting

  columnName:string='';
  sortOrder:string='';
  sort(){
    // alert(this.columnName+this.sortOrder)
this._vehicleService.getSortedVehicle(this.columnName,this.sortOrder).subscribe((data:any)=>{
  console.log(data);
  this.vehicle=data;
},(err:any)=>{
  alert("Internal server Error");
}
)
  }

// pagination

items:number=0;
pageNumber:number=0;
pagination(){
  this._vehicleService.getPaginationVehicle(this.items,this.pageNumber).subscribe((data:any)=>{
    console.log(data);
    this.vehicle=data;
  },(err:any)=>{
    alert("Internal Server Error");
  }
)
}

// delete method

delete(id:any){
  if(confirm("Are you sure to delete?'")==true){
  this._vehicleService.deleteVehicle(id).subscribe((data:any)=>{
    alert("Record deleted successfully")
  },(err:any)=>{
    alert("Internal Server Error!")
  }
)
this.loadvehicle();
}else{
  alert("you have cancelled the delete")
}
}

create(){
 this._router.navigateByUrl('/dashboard/create-vehicle')
}

}