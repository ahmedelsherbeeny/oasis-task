import { Component, EventEmitter, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit {


  details:any={}
  onEmmitStatus=new EventEmitter()

  constructor(@Inject(MAT_DIALOG_DATA) public dialogData:any) { }

  ngOnInit(): void {
    if(this.dialogData){
      this.details=this.dialogData
    }
  }
  handleAction(){
    this.onEmmitStatus.emit()
  }

}
