import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Paginator } from 'primeng/paginator';
import { SearchApiService } from 'src/app/shared/services/search-api.service';
import { ThreadApiService } from 'src/app/shared/services/thread-api.service';
import { LoadingStateMachine } from 'src/app/shared/states-machine/loading-state-machine';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild('threads_paginator', { static : true }) threadsPaginatorRef: Paginator;
  @ViewChild('contents_paginator', { static : true }) contentsPaginatorRef: Paginator;


  threadsFetechMachine = new LoadingStateMachine();
  threadsConfig : {}[] = [];
  threadsData = [];
  threadsPaginatorConfig = {
    pageSize : 0,
    totalPages : 0,
    totalElements: 0
  }

  contentsFetechMachine = new LoadingStateMachine();
  contentsConfig : {}[] = []
  contentsData = [];
  contentsPaginatorConfig = {
    pageSize : 0,
    totalPages : 0,
    totalElements: 0
  }

  loadingConfig = {
    threadsLoading: true,
    threadsLoadSuccess: false,

    contentsLoading: true,
    contentsLoadSuccess: false,
  }

  errorConfig = { fetchFailMsg : 'Oops, service currently unavailable' }


  constructor(private route: ActivatedRoute,
              private router: Router,
              private threadApiService : ThreadApiService,
              private searchApiService : SearchApiService) { }
  ngOnInit(): void {
    this.initThreadsConfig();
    this.initSearchFootprint();
  }


  initThreadsConfig() {
    this.threadsFetechMachine.context = {
      fetchInterface: this.threadApiService.fetchThreadsByFilter({
        type: 'NOVEL',
        pageable: {
          pageNum: 0,
          pageSize: 20
        }
      }),
      maxRefetchCount: 3
    }

    this.threadsFetechMachine.fetch().subscribe(data => {
      data.threads.map(thread => {
        this.threadsConfig.push({
          threadId: thread.threadId,
          series: thread.series.name,

          title: thread.title,
          description: thread.contents.length ? thread.contents[0] : "",
          type: thread.type.name,
          genres: thread.series.categories.map((genre => genre.name)),

          uploadedAt: new Date(thread.uploadedAt),
          uploadedBy: thread.uploadedBy,
          editedAt: new Date(thread.editedAt),
          editedBy: thread.editedBy,

          allowAudible: thread.allowAudible,

          lnhUser: {
            username: 'Audio Novel'
          }
        })
      })

      this.threadsPaginatorConfig.pageSize = data.pageSize;
      this.threadsPaginatorConfig.totalElements = data.totalElements;
    });
  }

  initSearchFootprint() {

  }


  handleThreadsPaginatorChange(event){
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        threadsPageNum: event.page,
        threadsPageSize: 20
      },
      queryParamsHandling: 'merge'
    });


    let threadsFetchFilterConfig = {};
    this.route.queryParams.subscribe(params => {
      threadsFetchFilterConfig = {
        series: this.searchApiService.findFirstSeries(params['series']),
        type: params['type'],
        genres: params['genres'] as string[],

        lnhUser: params['lnhUser'],
        allowAudible: params['allowAudible'],

        pageable: {
          pageNum: params['threadsPageNum'],
          pageSize: params['threadsPageSize']
        }
      }
    })


    this.threadsFetechMachine.reset();
    this.threadsFetechMachine.context = {
      fetchInterface: this.threadApiService.fetchThreadsByFilter(threadsFetchFilterConfig),
      maxRefetchCount: 3
    }
    this.threadsFetechMachine.fetch().subscribe(data => {
      this.threadsData = data;

      this.loadingConfig.threadsLoadSuccess = true;
      this.loadingConfig.threadsLoading = false;
    }, err => {
      this.loadingConfig.threadsLoadSuccess = false;
      this.loadingConfig.threadsLoading = false;
    });
  }

  handleContentsPaginatorChange(event){
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        contentsPageNum: event.page,
        contentsPageSize: 20
      },
      queryParamsHandling: 'merge'
    });


    let contentsFetchFilterConfig = {};
    this.route.queryParams.subscribe(params => {
      contentsFetchFilterConfig = {
        series: params['series'],
        type: params['type'],
        genres: params['genres'],

        lnhUser: params['lnhUser'],
        allowAudible: params['allowAudible'],

        pageable: {
          pageNum: params['contentsPageNum'],
          pageSize: params['contentsPageSize']
        }
      }
    })


    this.contentsFetechMachine.reset();
    this.contentsFetechMachine.context = {
      fetchInterface: this.threadApiService.fetchThreadsByFilter(contentsFetchFilterConfig),
      maxRefetchCount: 3
    }
    this.contentsFetechMachine.fetch().subscribe(data => {
      this.contentsData = data;

      this.loadingConfig.contentsLoadSuccess = true;
      this.loadingConfig.contentsLoading = false;
    }, err => {
      this.loadingConfig.contentsLoadSuccess = false;
      this.loadingConfig.contentsLoading = false;
    });
  }

  handleSearchChange(event){
    let queryParams = { };
    Object.keys(event)?.forEach(key => queryParams = { ...queryParams, ...{ [key]: event[key] }})

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: queryParams,
      queryParamsHandling: 'merge'
    });
  }



}

