import { Component } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
//    count(data:number){
//     alert(data);
// }
parent:number=0;
child:number=0;

catch(value:number){
  this.child=value;
}

userDetails:User={
  name:"venkatesh",
  mobile:1234567890,
  isIndian:true
}  


}
