import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit,OnDestroy {
  unsubscribe$:Subject<boolean>=new Subject();
  productId!:string
  productDetails:any={}


  constructor(private productService:ProductService,private acroute:ActivatedRoute){

  }
 

  ngOnInit(): void {
    this.acroute.params.pipe(takeUntil(this.unsubscribe$)).subscribe((params:Params)=>{
      this.productId=params['id']
      this.getProductDetails(this.productId)

    })
    


  }
  getProductDetails(id:string){
    this.productService.getProductById(id).pipe(takeUntil(this.unsubscribe$)).subscribe((details:any)=>{
      this.productDetails=details

    })

  }

  ngOnDestroy(): void {
    this.unsubscribe$.next(true)
  }

}
