import { Component } from '@angular/core';
import { VehicleService } from '../vehicle.service';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { debounce, debounceTime, switchMap } from 'rxjs';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent {
  loading:boolean=true;  // new line-08-09/2025
  vehicle:any[]=[];

  constructor(private _vehicleService:VehicleService, private _router:Router,)
  {

  this.loadvehicle();
  }


  

  loadvehicle(){
   this._vehicleService.getVehicle().subscribe(
      (data:any)=>{
        console.log(data);
        this.vehicle=data;
        this.loading=false;  //  new line -08/09/2025
        console.log("vehicle data:",this.vehicle);
      },(err:any)=>{
        alert("Internal Server Error");
      }
    
    )
  }
  // searchKeyword:string='';
  searchKeyword=new FormControl();   // search optimazation --10-09-2025
  search(){
    // alert(this.term)
    this.searchKeyword.valueChanges.pipe(
      debounceTime(400),
      switchMap((search)=>this._vehicleService.getFilteredVehicle(search)))
    .subscribe((data:any)=>{
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