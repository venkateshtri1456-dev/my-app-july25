import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AccountDetailsService } from '../account-details.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-account-details',
  templateUrl: './create-account-details.component.html',
  styleUrls: ['./create-account-details.component.css']
})
export class CreateAccountDetailsComponent {
  public accountsForm:FormGroup=new FormGroup({
  account_name:new FormControl(),
  available_balance:new FormControl(),
  account_number:new FormControl(),
  city:new FormControl(),
  profie_picture:new FormControl(),
ifsc_code:new FormControl(),
  });

  constructor(private _accountDetailsService:AccountDetailsService, private _router:Router){}
create(){
  this._accountDetailsService.createCustomerDetails(this.accountsForm.value).subscribe((data:any)=>{
    console.log("details:",this.accountsForm.value);
    alert("Record is created");
    this._router.navigateByUrl('/dashboard/accountDetails');
     
  },(error:any)=>{
    alert("Internal Server Error!")
  }
)
}
  

}
