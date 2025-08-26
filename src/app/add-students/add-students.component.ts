import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IdCardService } from '../id-card.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-add-students',
  templateUrl: './add-students.component.html',
  styleUrls: ['./add-students.component.css']
})
export class AddStudentsComponent {
  public studentForm:FormGroup=new FormGroup({

  name:new FormControl(),
  phone:new FormControl(),
  city:new FormControl(),
  dob:new FormControl(),
  profile_picture:new FormControl(),
  email:new FormControl(),
  school_logo: new FormControl(),
  school_name:new FormControl(),
  school_city:new FormControl(),
  school_pin:new FormControl(),
  });

  constructor(private _idcardService:IdCardService, private _router:Router){}
  submit(){
    console.log(this.studentForm.value);
    this._idcardService.createIdCard(this.studentForm.value).subscribe((data:any)=>{
      alert("Student details are added");
 this._router.navigateByUrl("/dashboard/idCard");

    },(err:any)=>{
      alert("Internal Server Error!")
    }
  )
  }

}
