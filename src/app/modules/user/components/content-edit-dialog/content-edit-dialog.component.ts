import { Component, EventEmitter, Input, OnInit, Output, Self, ViewChild } from '@angular/core';
import { SearchApiService } from 'src/app/shared/services/search-api.service';
import { timer } from 'rxjs'
import { Paginator } from 'primeng/paginator';

declare function initQuillEditor(id): any;

@Component({
  selector: 'app-content-edit-dialog',
  templateUrl: './content-edit-dialog.component.html',
  styleUrls: ['./content-edit-dialog.component.css']
})
export class ContentEditDialogComponent implements OnInit {

  @ViewChild('content_editor_paginator', {static : false}) paginator: Paginator;

  @Input() visible = false;
  @Input() header = '';

  @Output() dialogClose = new EventEmitter<boolean>();

  tabs = [{
    label: 'Info',
    icon: '',
    isActive: true,
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
    description: '',
    content: [],

    type: [],
    markets: [],
    sectors: [],
    tickers: [],

    analysis: [],
    opinions: []
  }
  editConfig = {
    types: [],
    markets: [],
    sectors: [],

    analysis: [],
    opinions: []
  }

  showInfo = true;
  showContent = false;

  loading = true;
  editor = null;
  draftIndex = 0;
  drafts = [[]];


  constructor(private searchApiService: SearchApiService) { }
  ngOnInit(): void {
    this.initDefaultEditConfigAndResult();
    this.initContentEditor();
  }

  initDefaultEditConfigAndResult(){
    this.editConfig = {
      types: this.searchApiService.getValidTypes(),
      markets: this.searchApiService.getValidMarkets(),
      sectors: this.searchApiService.getValidSectors(),

      analysis: this.searchApiService.getValidAnalysis(),
      opinions: this.searchApiService.getValidOpinions()
    }
  }

  initContentEditor(){
    let retryCtr = 40;
    const statusCheck = timer(0, 500).subscribe(() => {
      if(document.getElementById('content_editor') == null)
        retryCtr --;
      else{
        this.editor = initQuillEditor("content_editor");
        this.loading = false;
        statusCheck.unsubscribe();
      }
    })
  }

  handleVisibleChange(){ this.dialogClose.emit(this.visible); }
  handlePageChange(event){ this.draftIndex = event.page; }
  handleKeydown(event) {
    if(event.key === 'y' && event.ctrlKey === true)
      this.editor.history.redo();

    if(event.key !== 'Backspace' && this.editor.getLength() - 1 > 5999)
      event.preventDefault();

  }

  handleInsertClick(){
    if(this.drafts.length < 500){
      this.drafts.splice(this.draftIndex, 0, []);
      setTimeout(() => this.paginator.changePage(++ this.draftIndex), 0);
    }
  }

  handleDeleteClick(){
    if(this.drafts.length > 1){
      if(this.draftIndex === this.drafts.length - 1 && this.draftIndex !== 0)
      this.draftIndex --;

      this.drafts.splice(this.draftIndex, 1);
      setTimeout(() => this.paginator.changePage(this.draftIndex), 0);
    }
  }

}
