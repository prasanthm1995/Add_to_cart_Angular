import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';
import { Product } from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() productIn:any ={}
  products:any=[]
   
   productID:any;
   quantity:Number=1;
   i=1;
   
  
  constructor(private activatedRoute:ActivatedRoute,private productService:ApiService,private route:Router,private cartservice:CartService) { }

  ngOnInit(): void {
     this.productID=this.activatedRoute.snapshot.params['id'];
       console.log(this.productID)
    //accessing path params using params property
    //this.route.params.subscribe(data=>{
    //  console.log(data['id']);
     // this.productID=data['id'];
   //  })

//accessing path params using paramMap
  // this.route.paramMap.subscribe(params=>{
   //  console.log(params.get('id'))
  //  })
    
    this.productService.getProductById(this.productID).subscribe(product=>{
     this.products=product as Product
       console.log(this.products)
    })
    
 
  }
  minus(){
    if(this.i !=0){
      this.i--;
      this.quantity=this.i;
    }
  }
  plus(){
    
      this.i++;
      this.quantity=this.i;
     
  }
  getone(){
    this.productService.getProductById(this.productID).subscribe(data=>{
      console.log(data);
    })
  }
  addtocart(product:any){
    this.cartservice.addtoCart(product);
  }
}
