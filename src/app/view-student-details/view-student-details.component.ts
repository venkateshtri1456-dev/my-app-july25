import { identifierName } from '@angular/compiler';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IdCardService } from '../id-card.service';

@Component({
  selector: 'app-view-student-details',
  templateUrl: './view-student-details.component.html',
  styleUrls: ['./view-student-details.component.css']
})
export class ViewStudentDetailsComponent {
id:number=0;
student:any={};
constructor(private _activateroute:ActivatedRoute , private _idCardService:IdCardService){
  _activateroute.params.subscribe((data:any)=>{
    console.log(data);
    this.id=data.id;
    console.log(this.id);

        _idCardService.getSingleCard(this.id).subscribe((data:any)=>{
          this.student=data;
          console.log(this.student);
        },(error:any)=>{
          alert("Internal Server Error!");
        }
      )
  })
}

}
