import { Component } from '@angular/core';
import { IdCardService } from '../id-card.service';
import { Router } from '@angular/router';
import { identifierName } from '@angular/compiler';

@Component({
  selector: 'app-id-card',
  templateUrl: './id-card.component.html',
  styleUrls: ['./id-card.component.css']
})
export class IdCardComponent {

  cards:any[]=[];
  constructor(private _idcardService:IdCardService,private _router:Router ){

    this.loadStudentDetails();
  }

    
  loadStudentDetails(){
   this._idcardService.getidCard().subscribe((data:any)=>{
      console.log(data);
      this.cards=data;
      console.log("data:",  this.cards);


    },(err:any)=>{
      alert("Internal Server Error")
    }
    )
}

    searchKeyword:string='';
  search(){
    // alert(this.term)
    this._idcardService.getFilteredidCard(this.searchKeyword).subscribe((data:any)=>{
      console.log(data);
      this.cards=data;
    },(err:any)=>{
      alert("Internal Server Error!");
    }
  )
  }

  columnName:string='';
  orderName:string='';
  sorting(){
    // alert(this.columnName+this.orderName);
    this._idcardService.getSortedIdCard(this.columnName,this.orderName).subscribe((data:any)=>{
      console.log(data);
      this.cards=data;
      console.log( "student data:",this.cards);

    },(err:any)=>{
      alert("Internal Server Error!");
    }
  )
  }

  items:number=0;
  pageNumbers:number=0;
  pagination(){
   this._idcardService.getPagination(this.items,this.pageNumbers).subscribe((data:any)=>{
  this.cards=data;
    },(err:any)=>{
      alert("Internal Server Error!");
    }
  )
  }
create(){
  this._router.navigateByUrl('/dashboard/addStudents');
  
}

delete(id:any) {
  if (confirm("Are you sure to delete?")==true) {
    this._idcardService.deleteIdCard(id).subscribe(
      (data:any) => {
        alert("Record deleted successfully");
       this.loadStudentDetails();
      },
      (err:any) => {
        alert("Internal Server Error!");
      }
    )
  } else {
    alert("You have cancelled the delete");
  }
}
}


