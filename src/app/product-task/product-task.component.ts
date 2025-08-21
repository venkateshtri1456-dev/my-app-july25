import { Component } from '@angular/core';

@Component({
  selector: 'app-product-task',
  templateUrl: './product-task.component.html',
  styleUrls: ['./product-task.component.css']
})
export class ProductTaskComponent {

  products :any=[
    {productname: 'pen',price: 100,rating: 3,freedelivery: 'true'},
    {productname: 'phone',price: 1000,rating: 2,freedelivery: 'false'},
    {productname: 'shirt',price: 500,rating: 4,freedelivery:'true'},
    {productname: 'cap',price: 300,rating: 5,freedelivery:'false'},
    {productname: 'mobile case',price: 350,rating: 2,freedelivery:'true'},
    {productname: 'remote',price: 200,rating: 2.5,freedelivery:'false'},
   
  ];
 
  priceAscending(){
    this.products.sort((a:any,b:any)=>a.price-b.price);
  }
  priceDescending(){
    this.products.sort((a:any,b:any)=>b.price-a.price);
  }
  ratingAscending(){
    this.products.sort((a:any,b:any)=>a.rating-b.rating);
  }
  ratingDescending(){
    this.products.sort((a:any,b:any)=>b.rating-a.rating);
  }
    
  delete(index:number){
    this.products.splice(index,1);
  }

  deliveryCharges(){
    this.products=this.products.map((product:any)=>{
      product.price=product.price+50;
      return product;
    });
  }

  discount(){
   this.products= this.products.map((product:any)=>{
      product.price=(product.price/2);
      return product;
    });
  }
totalPrice(){
  var total=this.products.reduce((sum:any,product:any)=>sum+product.price,0);
  alert(total);
}

nameSearch:string='';
typing(){
  this.products=this.products.filter((product:any)=>product.productname.includes(this.nameSearch));
}
names:string='';
price:number=0;
rating:number=0;
freedelivery:boolean=true;

Record(){

  var user={
  productname:this.names,
  price:this.price,
  rating:this.rating,
  freedelivery:this.freedelivery,

 

}
   this.products.unshift(user);
  
}
}




//   var user={
//     name:this.empName,
//     experience:this.experience,
//     package:this.package,
//     role:this.role
//   }
//   this.employees.unshift(user);
//   }