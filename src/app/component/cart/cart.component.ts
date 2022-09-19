import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
 
  public products:any=[];
  public grandTotal :number=0;


  constructor(private cartservice:CartService) { }

  ngOnInit(): void {
    this.cartservice.getProducts()
    .subscribe(res=>{
      this.products=res;
      this.grandTotal=this.cartservice.getTotalPrice();
    })

  }
  removeItem(product:any){
     this.cartservice.removeCartItem(product);
  }
 emptycart(){
    this.cartservice.removeAllCart();
  }
}
