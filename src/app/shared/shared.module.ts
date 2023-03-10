import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { CardViewComponent } from './components/card-view/card-view.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AddEditProductComponent } from './components/add-edit-product/add-edit-product.component';


@NgModule({
  declarations: [
    CardViewComponent,
    NavBarComponent,
    AddEditProductComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports:[
    NavBarComponent
  ]
})
export class SharedModule { }
