import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { CardViewComponent } from './components/card-view/card-view.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AddEditProductComponent } from './components/add-edit-product/add-edit-product.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ConfirmComponent } from './components/confirm/confirm.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';



@NgModule({
  declarations: [
    CardViewComponent,
    NavBarComponent,
    AddEditProductComponent,
    ConfirmComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MatDialogModule,
    ReactiveFormsModule,
    RouterModule
    
  ],
  exports:[
    NavBarComponent,
    CardViewComponent
  ]
})
export class SharedModule { }
