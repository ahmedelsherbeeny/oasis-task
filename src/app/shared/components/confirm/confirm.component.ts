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
    // on opening the confirmation component we send details to appear in its template
    if(this.dialogData){
      this.details=this.dialogData
    }
  }
  handleAction(){
    //on confirming we execute what we want like deleting or logging out
    this.onEmmitStatus.emit()
  }

}
