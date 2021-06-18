import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-edit',
  templateUrl: './content-edit.component.html',
  styleUrls: ['./content-edit.component.css']
})
export class ContentEditComponent implements OnInit {

  tableConfigs = [];

  createContentDialogVisible = false;
  editContentDialogVisible = false;

  dialogHeader = "";

  constructor() { }
  ngOnInit(): void {
    this.tableConfigs.push({
      "title" : "Jobless Reincarnation Vol. 3",
      "view" : 12,
      "updatedAt" : "Mar 20 '21 at 10:12: PM"
    })

  }

  handleContentsPaginatorChange(event){

  }

  handleCreateContentClick(){
    if(!this.createContentDialogVisible && !this.editContentDialogVisible){
      this.dialogHeader = "Create content";
      this.createContentDialogVisible = true;
    }

  }

  handleEditContentClick(){
    if(!this.createContentDialogVisible && !this.editContentDialogVisible){
      this.dialogHeader = "Edit content";
      this.editContentDialogVisible = true;
    }
  }

  handleDialogClose(){
    this.createContentDialogVisible = false;
    this.editContentDialogVisible = false;
  }

}
