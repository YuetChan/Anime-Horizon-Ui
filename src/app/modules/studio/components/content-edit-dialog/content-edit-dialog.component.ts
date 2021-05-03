import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SearchApiService } from 'src/app/shared/services/search-api.service';

@Component({
  selector: 'app-content-edit-dialog',
  templateUrl: './content-edit-dialog.component.html',
  styleUrls: ['./content-edit-dialog.component.css']
})
export class ContentEditDialogComponent implements OnInit {

  @Input() visible = false;
  @Input() header = "";

  @Output() dialogClose = new EventEmitter<boolean>();

  tabs = [{
    label: 'Info',
    icon: '',
    command: (event) =>{
      this.showInfo = true;
      this.showContent = false;
    }
  },{
    label: 'Content',
    icon: '',
    command: (event) =>{
      this.showContent = true;
      this.showInfo = false;
    }
  }]
  activeTab = this.tabs[0];

  editResult = {
    title: '',
    series: '',
    description: '',

    content: [],

    type: [],
    genres : []
  }
  editConfig = {
    types: [],
    genres : []
  }

  showInfo = true;
  showContent = false;

  constructor(private searchApiService: SearchApiService) { }
  ngOnInit(): void { this.initDefaultEditConfigAndResult() }

  initDefaultEditConfigAndResult(){
    this.editConfig = {
      types: this.searchApiService.getValidTypes(),
      genres : this.searchApiService.getValidGenres()
    }
  }

  handleVisibleChange(){ this.dialogClose.emit(this.visible); }



}
