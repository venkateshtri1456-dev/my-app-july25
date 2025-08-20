import { Component } from '@angular/core';

@Component({
  selector: 'app-product-task',
  templateUrl: './product-task.component.html',
  styleUrls: ['./product-task.component.css']
})
export class ProductTaskComponent {

  products :any=[
    {sno: 1,productname: 'pen',price: 100,rating: 3,freedelivery: 'true'},
    {sno: 2,productname: 'phone',price: 1000,rating: 2,freedelivery: 'false'},
    {sno: 3,productname: 'shirt',price: 500,rating: 4,freedelivery:'true'},
    {sno: 4,productname: 'cap',price: 300,rating: 5,freedelivery:'false'},
    {sno: 5,productname: 'mobile case',price: 350,rating: 2,freedelivery:'true'},
    {sno: 6,productname: 'remote',price: 200,rating: 2.5,freedelivery:'false'},
   
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


}
