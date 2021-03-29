import { Component, OnInit, ViewChild } from '@angular/core';
import { Paginator } from 'primeng/paginator';
import { concat, of, throwError } from 'rxjs';
import { ThreadApiService } from 'src/app/shared/services/thread-api.service';
import { LoadingStateMachine } from 'src/app/shared/states-machine/loading-state-machine';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild('post_paginator', { static : true }) paginatorRef: Paginator;

  threadsConfig : {}[] = [
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
  contentConfigs : {}[] = []

  threadsFetechMachine = new LoadingStateMachine();

  defaultThreadFetchFilterConfig = {
    lnhUser: '',
    type: 'NOVEL',
    allowAudible: false,
    genres: [],
    pageable: {
      pageNum: 0,
      pageSize: 10
    }
  }
  defaultFetchContext = {
    fetchInterface : throwError('catch me'),
    maxRefetchCount : 3
  }


  loadingConfig = {
    threadLoading: true,
    threadLoadSuccess: false,

    contentLoading: true,
    contentLoadSuccess: false,

    errorMessage: 'Oops, service currently unavailable'
  }


  threadsData = [];
  threadsPaginatorConfig = {
    pageSize : 0,
    totalRecords : 0,
  }

  contentData = [];


  constructor(private threadApiService : ThreadApiService) { }
  ngOnInit(): void {

  }

  initThreadsConfig() {
    this.threadsFetechMachine.context = this.defaultFetchContext;
    this.threadsFetechMachine.fetch().subscribe();
  }

  initSearchFootprint() {

  }

  changeThreadsPage(event){
    // this.threadFetechMachine.reset();

    // let newFetchFilterConfig = Object.assign({}, this.defaultThreadFetchFilterConfig);
    // let newFetchContext = Object.assign({}, this.defaultFetchContext);

    // newFetchFilterConfig.pageable = { pageNum: event.page, pageSize: 10 };
    // newFetchContext.fetchInterface = this.threadApiService.fetchThreadsByFilter(newFetchFilterConfig);

    // this.threadFetechMachine.context = newFetchContext;
    // this.threadFetechMachine.fetch().subscribe(data => {
    //   this.threadsData = data;
    //   this.loadingConfig.threadLoadSuccess = true;
    //   this.loadingConfig.threadLoading = false;
    // }, err => {
    //   this.loadingConfig.threadLoadSuccess = false;
    //   this.loadingConfig.threadLoading = false;
    // });
  }



}

