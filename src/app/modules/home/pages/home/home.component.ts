import {Component, OnInit, ViewChild} from '@angular/core';
import {Paginator} from 'primeng/paginator';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild('post_paginator', { static : true }) paginatorRef: Paginator;

  pageNum = 0;
  pageSize = 15;

  totalCount = 0;

  threadConfigs : {}[] = [
    {
      title :"Re:ZERO - vol. 1 LN",
      description : "Re:ZERO -Starting Life in Another World-, Vol. 1 - Light Novels Subaru Natsuki was just trying to get to the convenience store but wound up summoned to another world. He encounters the usual things--life-threatening situations, silver haired beauties, cat fairies--you know, normal stuff. All that would be bad enough, but he's also gained the most inconvenient magical ability of all--time travel, but he's got to die to use it. How do you repay someone who saved your life when all you can do is die?",
      updatedAt : "",
      updatedBy : "",
      uploadedAt : "",
      uploadedBy : "",
      allowAudible : true,
      LnhUser: {
        userId : 1,
        username: "Audio Novel"
      }
    },
    {
      title :"Re:ZERO - vol. 2 LN",
      description : "Re:ZERO -Starting Life in Another World-, Vol. 2 - Light Novels Subaru Natsuki was just trying to get to the convenience store but wound up summoned to another world. He encounters the usual things--life-threatening situations, silver haired beauties, cat fairies--you know, normal stuff. All that would be bad enough, but he's also gained the most inconvenient magical ability of all--time travel, but he's got to die to use it. How do you repay someone who saved your life when all you can do is die?",
      updatedAt: "",
      updatedBy: "",
      uploadedAt: "",
      uploadedBy: "",
      allowAudible : false,
      LnhUser: {
        userId : 1,
        username: "Audio Novel"
      }
    },
    {
      title :"Re:ZERO - vol. 3 LN",
      description : "Re:ZERO -Starting Life in Another World-, Vol. 3 - Light Novels Subaru Natsuki was just trying to get to the convenience store but wound up summoned to another world. He encounters the usual things--life-threatening situations, silver haired beauties, cat fairies--you know, normal stuff. All that would be bad enough, but he's also gained the most inconvenient magical ability of all--time travel, but he's got to die to use it. How do you repay someone who saved your life when all you can do is die?",
      updatedAt: "",
      updatedBy: "",
      uploadedAt: "",
      uploadedBy: "",
      allowAudible : false,
      LnhUser: {
        userId : 1,
        username: "Audio Novel"
      }
    },
    {
      title :"Re:ZERO - vol. 4 LN",
      description : "Re:ZERO -Starting Life in Another World-, Vol. 3 - Light Novels Subaru Natsuki was just trying to get to the convenience store but wound up summoned to another world. He encounters the usual things--life-threatening situations, silver haired beauties, cat fairies--you know, normal stuff. All that would be bad enough, but he's also gained the most inconvenient magical ability of all--time travel, but he's got to die to use it. How do you repay someone who saved your life when all you can do is die?",
      updatedAt: "",
      updatedBy: "",
      uploadedAt: "",
      uploadedBy: "",
      allowAudible : true,
      LnhUser: {
        userId : 1,
        username: "Audio Novel"
      }
    },
    {
      title :"Re:ZERO - vol. 5 LN",
      description : "Re:ZERO -Starting Life in Another World-, Vol. 3 - Light Novels Subaru Natsuki was just trying to get to the convenience store but wound up summoned to another world. He encounters the usual things--life-threatening situations, silver haired beauties, cat fairies--you know, normal stuff. All that would be bad enough, but he's also gained the most inconvenient magical ability of all--time travel, but he's got to die to use it. How do you repay someone who saved your life when all you can do is die?",
      updatedAt: "",
      updatedBy: "",
      uploadedAt: "",
      uploadedBy: "",
      allowAudible : false,
      LnhUser: {
        userId : 1,
        username: "Audio Novel"
      }
    },
    {
      title :"Re:ZERO - vol. 6 LN",
      description : "Re:ZERO -Starting Life in Another World-, Vol. 3 - Light Novels Subaru Natsuki was just trying to get to the convenience store but wound up summoned to another world. He encounters the usual things--life-threatening situations, silver haired beauties, cat fairies--you know, normal stuff. All that would be bad enough, but he's also gained the most inconvenient magical ability of all--time travel, but he's got to die to use it. How do you repay someone who saved your life when all you can do is die?",
      updatedAt: "",
      updatedBy: "",
      uploadedAt: "",
      uploadedBy: "",
      allowAudible : false,
      LnhUser: {
        userId : 1,
        username: "Audio Novel"
      }
    }


  ];

  contentConfigs : {}[] = [
  ]

  constructor() { }
  ngOnInit(): void { this.refreshOverviews(); }

  changePage(event){
    this.pageNum = event.page;
    this.refreshOverviews();
  }

  refreshOverviews() { }

  getDefaultPageable(){ return  {pageNum : this.pageNum, pageSize : this.pageSize}; }

}

