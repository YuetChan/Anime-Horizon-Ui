import {Component, OnInit, ViewChild} from '@angular/core';
import {MetaApiService, Pageable} from '../../shared/services/meta-api.service';
import {Overview} from '../model/overview'
import {Paginator} from 'primeng/paginator';
import {OverlayPanel} from 'primeng/overlaypanel';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {

  @ViewChild('post_paginator', { static : true }) paginatorRef: Paginator;
  @ViewChild('overlay_panel', { static : true}) overLayPanelRef: OverlayPanel;

  pageNum = 0;
  pageSize = 15;

  totalCount = 0;

  overviews : Overview[] = [
    {
      title :"Re:ZERO - vol. 1 LN",
      description : "Re:ZERO -Starting Life in Another World-, Vol. 1 - Light Novels Subaru Natsuki was just trying to get to the convenience store but wound up summoned to another world. He encounters the usual things--life-threatening situations, silver haired beauties, cat fairies--you know, normal stuff. All that would be bad enough, but he's also gained the most inconvenient magical ability of all--time travel, but he's got to die to use it. How do you repay someone who saved your life when all you can do is die?",
      updatedAt: "",
      updatedBy: "",
      uploadedAt: "",
      uploadedBy: "",
      creator: "Audio Novel"
    },
    {
      title :"Re:ZERO - vol. 2 LN",
      description : "Re:ZERO -Starting Life in Another World-, Vol. 2 - Light Novels Subaru Natsuki was just trying to get to the convenience store but wound up summoned to another world. He encounters the usual things--life-threatening situations, silver haired beauties, cat fairies--you know, normal stuff. All that would be bad enough, but he's also gained the most inconvenient magical ability of all--time travel, but he's got to die to use it. How do you repay someone who saved your life when all you can do is die?",
      updatedAt: "",
      updatedBy: "",
      uploadedAt: "",
      uploadedBy: "",
      creator: "Audio Novel"
    },
    {
      title :"Re:ZERO - vol. 3 LN",
      description : "Re:ZERO -Starting Life in Another World-, Vol. 3 - Light Novels Subaru Natsuki was just trying to get to the convenience store but wound up summoned to another world. He encounters the usual things--life-threatening situations, silver haired beauties, cat fairies--you know, normal stuff. All that would be bad enough, but he's also gained the most inconvenient magical ability of all--time travel, but he's got to die to use it. How do you repay someone who saved your life when all you can do is die?",
      updatedAt: "",
      updatedBy: "",
      uploadedAt: "",
      uploadedBy: "",
      creator: "Audio Novel"
    },
    {
      title :"Re:ZERO - vol. 3 LN",
      description : "Re:ZERO -Starting Life in Another World-, Vol. 3 - Light Novels Subaru Natsuki was just trying to get to the convenience store but wound up summoned to another world. He encounters the usual things--life-threatening situations, silver haired beauties, cat fairies--you know, normal stuff. All that would be bad enough, but he's also gained the most inconvenient magical ability of all--time travel, but he's got to die to use it. How do you repay someone who saved your life when all you can do is die?",
      updatedAt: "",
      updatedBy: "",
      uploadedAt: "",
      uploadedBy: "",
      creator: "Audio Novel"
    },
    {
      title :"Re:ZERO - vol. 3 LN",
      description : "Re:ZERO -Starting Life in Another World-, Vol. 3 - Light Novels Subaru Natsuki was just trying to get to the convenience store but wound up summoned to another world. He encounters the usual things--life-threatening situations, silver haired beauties, cat fairies--you know, normal stuff. All that would be bad enough, but he's also gained the most inconvenient magical ability of all--time travel, but he's got to die to use it. How do you repay someone who saved your life when all you can do is die?",
      updatedAt: "",
      updatedBy: "",
      uploadedAt: "",
      uploadedBy: "",
      creator: "Audio Novel"
    },
    {
      title :"Re:ZERO - vol. 3 LN",
      description : "Re:ZERO -Starting Life in Another World-, Vol. 3 - Light Novels Subaru Natsuki was just trying to get to the convenience store but wound up summoned to another world. He encounters the usual things--life-threatening situations, silver haired beauties, cat fairies--you know, normal stuff. All that would be bad enough, but he's also gained the most inconvenient magical ability of all--time travel, but he's got to die to use it. How do you repay someone who saved your life when all you can do is die?",
      updatedAt: "",
      updatedBy: "",
      uploadedAt: "",
      uploadedBy: "",
      creator: "Audio Novel"
    }


  ];

  constructor(private metaApiService : MetaApiService) { }
  ngOnInit(): void { this.refreshOverviews(); }

  changePage(event){
    this.pageNum = event.page;
    this.refreshOverviews();
  }

  refreshOverviews() { }

  getDefaultPageable(){ return  {pageNum : this.pageNum, pageSize : this.pageSize}; }

}

