import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private dialog:MatDialog) { }

  openComponent(component:any,data:any,width?:any){
    const dialogConfig=new MatDialogConfig()
    dialogConfig.data=data
    dialogConfig.width=width
    dialogConfig.autoFocus=false
    this.dialog.open(component,dialogConfig)

  }
  getToken(){
    return localStorage.getItem('token')
  }
  checkToken(){
    return !!localStorage.getItem('token')
  }
}
