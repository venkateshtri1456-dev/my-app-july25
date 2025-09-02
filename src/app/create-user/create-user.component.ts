import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, MaxLengthValidator, Validators } from '@angular/forms';
import { appleMail } from '../validators';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {
public userForm:FormGroup=new FormGroup({
  name:new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(10)]),
  email:new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(20),appleMail]),
  password:new FormControl('',[Validators.required]),
  mobile:new FormControl('',[Validators.required]),
  address:new FormGroup({
    city:new FormControl('',[Validators.required]),
    state:new FormControl('',[Validators.required]),
    pincode:new FormControl('',[Validators.required]),
  }),
  type:new FormControl('',[Validators.required]),
  // busFee:new FormControl(),
  // hostelFee:new FormControl(),

// form Array
  cards:new FormArray([])

})

get cardsFromArray(){
  return this.userForm.get('cards') as FormArray;
}

addCard(){
  this.cardsFromArray.push(new FormGroup({
    cardNumber:new FormControl(),
    expiry:new FormControl(),
    cvv:new FormControl(),

  })
)
}

delete(index:any){
  this.cardsFromArray.removeAt(index);
}

// dynamic form group

constructor(){
  this.userForm.get('type')?.valueChanges.subscribe((data:any)=>{
    if(data=='residential'){
      this.userForm.addControl('hostelFee',new FormControl);
      this.userForm.removeControl('busFee');
    }else{
      this.userForm.addControl('busFee',new FormControl);
      this.userForm.removeControl('hostelFee')
    }
  })
}


submit(){
  console.log(this.userForm.value);
}

// limitText(event: any): void {
//     const input = event.target as HTMLTextAreaElement;
//     if (input.value.length > 50) {
//       input.value = input.value.substring(0, 50); // keep only first 30 chars
//       this.userForm.get('message')?.setValue(input.value); // sync with form
//     }
//   }
}
