import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {

  isMorning:boolean=true;

  state:string='Telangana';
  states:string[]=['Andhra Pradesh','Telangana', 'Kerala','Karnataka','Delhi'];
  prices:number[]=[10,75,95,87,35,988];

  products:string[]=['Fruits','Vegetables','Electronics','Mobiles'];

}
