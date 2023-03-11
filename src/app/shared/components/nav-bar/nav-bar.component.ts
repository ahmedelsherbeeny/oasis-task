import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/features/services/product.service';
import { LoaderService } from '../../loader/loader.service';
import { SharedService } from '../../servies/shared.service';
import { AddEditProductComponent } from '../add-edit-product/add-edit-product.component';
import { ConfirmComponent } from '../confirm/confirm.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {



  constructor(
    private sharedService:SharedService,public router:Router,
    private loader:LoaderService,private dialog:MatDialog){

  }

  loading$=this.loader.loading$



openAddDialogProduct(){

  let data = {
    action: 'Add'
  }

  // shared logig for opening dialogues  is in the sharedser
  this.sharedService.openComponent(AddEditProductComponent,data,'850px')

}

openLogoutConfirmation(){
  const dilogconfig = new MatDialogConfig()
  dilogconfig.data = {
    message: 'Are you sure you want to log out ?'
  }
  const dialogref = this.dialog.open(ConfirmComponent, dilogconfig)
  const sub = dialogref.componentInstance.onEmmitStatus.subscribe((res: any) => {
    this.logOut()
    
    dialogref.close()



  })

}

logOut(){
  localStorage.clear()
  this.router.navigate(['/'])
}

}
