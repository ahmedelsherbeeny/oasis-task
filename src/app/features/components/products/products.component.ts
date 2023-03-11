import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit,OnDestroy {

  unsubscribe$:Subject<boolean>=new Subject();
  products:any[]=[]
  page: number = 1
  limit!:number



  constructor(private productService:ProductService,private acRoute:ActivatedRoute){
    

  }
  
  ngOnInit(): void {

    this.getAllProducts()
    this.handlePagination()
  }



  getAllProducts(){
    this.productService.getProducts().pipe(takeUntil(this.unsubscribe$)).subscribe((prods:any)=>{
      this.products=prods.products
    })

  }



 

  handlePagination(){
    this.productService.paginateProducts().pipe(takeUntil(this.unsubscribe$)).subscribe((params:Params)=>{
      this.limit=params['limit']

    })

  }


  ngOnDestroy(): void {

    this.unsubscribe$.next(true)
  }

}
