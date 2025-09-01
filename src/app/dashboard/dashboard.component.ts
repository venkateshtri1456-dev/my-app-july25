import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  logout(){
    if(confirm('Are you sure to logout?')==true){
      sessionStorage.removeItem('token');
    alert("logout successfully");
    }(error:any)=>{
      alert("Internal Server Error!");
    }
  
    
  }


}
