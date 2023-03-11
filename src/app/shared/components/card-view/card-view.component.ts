import { Component, Input } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/features/services/product.service';
import { SharedService } from '../../servies/shared.service';
import { AddEditProductComponent } from '../add-edit-product/add-edit-product.component';
import { ConfirmComponent } from '../confirm/confirm.component';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.scss']
})
export class CardViewComponent {
  @Input() data:any=[]
  @Input() productId:any
  math = Math;

  constructor(private router:Router,
    private sharedService:SharedService,private dialog: MatDialog,private productService:ProductService){

  }




  openProductDetails(id:any){
    this.router.navigate(['product',id])

  }

// as we have one shared component for add and edit product
// if we choose to edit we open the edit dialogue component
  openEditDialogProduct(values:any){

    let data = {
      action: 'Edit',
      data:values,
      id:values.id

    }
    
  
    // shared logig for opening dialogues  is in the sharedser
    this.sharedService.openComponent(AddEditProductComponent,data,'850px')
  
  }

  openDeleteConfirmation(id:any){
    const dilogconfig = new MatDialogConfig()
    dilogconfig.data = {
      message: 'Are you sure you want to delete this product ?'
    }
    const dialogref = this.dialog.open(ConfirmComponent, dilogconfig)
    const sub = dialogref.componentInstance.onEmmitStatus.subscribe((res: any) => {
      this.productService.deleteProduct(id).subscribe(res=>{

        setTimeout(() => {
          alert('deleted successfully')
  
          
        }, 2000);
      })
      
      dialogref.close()



    })

  }


  }



