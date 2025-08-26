import { Component } from '@angular/core';
import { AccountDetailsService } from '../account-details.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent {
    accounts:any[]=[];
  constructor(private _accountdetailService:AccountDetailsService,private _router:Router){
     this.loadAccountDetails();
  }
  loadAccountDetails(){
    this._accountdetailService.getCustomerDetails().subscribe((data:any)=>{
       this.accounts=data;
      console.log( "Details: ", this.accounts);
    },(err:any)=>{
      alert("Internal Server Error!")
    }
  )

}

  
  searchkeyword:string='';
  search(){
    this._accountdetailService.getFilteredCustomerDetails(this.searchkeyword).subscribe((data:any)=>{
        console.log(data);
        this.accounts=data;
    },(error:any)=>{
      alert("Internal Server Error");
    }
  )

  }

columnName:string='';
orderName:string='';
sort(){
  this._accountdetailService.getSortingCustomerDetails(this.columnName,this.orderName).subscribe((data:any)=>{
      this.accounts=data;
  },(error:any)=>{
    alert("Internal Server Error!")
  }
)
}

limitNumber:number=0;
pageNumber:number=0;
pagination(){
  this._accountdetailService.getPaginationCustomerDetails(this.limitNumber,this.pageNumber).subscribe((data:any)=>{
    this.accounts=data;
  },(error:any)=>{
    alert("Internal Server Error");
  }
)
}

create(){
this._router.navigateByUrl('/dashboard/createAccountDetails');
}

delete(id:any){
  if(confirm("Are you sure to delete?")==true){
this._accountdetailService.deleteCustomerDetails(id).subscribe((data:any)=>{
  alert("Record deleted scuccesfully");
    this.loadAccountDetails();

},(error:any)=>{
  alert("Internal Server Error!");
}
)
  }

  else{
    alert("you have succesfully cancelled");
  }
  
}
}