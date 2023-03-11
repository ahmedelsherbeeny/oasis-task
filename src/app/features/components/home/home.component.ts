import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit,OnDestroy  {
  unsubscribe$:Subject<boolean>=new Subject();

  products:any[]=[]

  constructor(private productService:ProductService){}
  
  ngOnInit(): void {
    this.productService.getProducts().pipe(takeUntil(this.unsubscribe$)).subscribe((data:any)=>{
      this.products=data.products.splice(0,6)
    })


  }
  
  ngOnDestroy(): void {
    this.unsubscribe$.next(true)
  }
}
