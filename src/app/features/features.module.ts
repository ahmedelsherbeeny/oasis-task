import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { ProductsComponent } from './components/products/products.component';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    ProductsComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule
  ]
})
export class FeaturesModule { }
