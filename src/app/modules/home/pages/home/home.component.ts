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

  @ViewChild('threadsPaginator', { static : true }) threadsPaginatorRef: Paginator;
  @ViewChild('contents_paginator', { static : true }) contentsPaginatorRef: Paginator;


  DEFAULT_PAGE_SIZE = 1;

  threadsFetechMachine = new LoadingStateMachine();
  threadsConfig : {}[] = [];
  threadsData = [];
  threadsPaginatorConfig = {
    pageSize : this.DEFAULT_PAGE_SIZE,
    totalPages : 0,
    totalElements: 0
  }

  contentsFetechMachine = new LoadingStateMachine();
  contentsConfig : {}[] = []
  contentsData = [];
  contentsPaginatorConfig = {
    pageSize : this.DEFAULT_PAGE_SIZE,
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
    let threadsFetchFilterConfig = {};
    this.route.queryParams.subscribe(params => {
      let pageable = {
        pageNum: this.searchApiService.findFirstValidNumber(params['threadsPageNum']),
        pageSize: this.DEFAULT_PAGE_SIZE
      }

      threadsFetchFilterConfig = {
        series: this.searchApiService.findFirstItem(params['series']),
        type: this.searchApiService.findFirstValidType(params['type']),
        genres: this.searchApiService.findValidGenres(params['genres'] ? (Array.isArray(params['genres']) ? params['genres'] : []) : []),

        lnhUser: this.searchApiService.findFirstItem(params['lnhUser']),
        allowAudible: this.searchApiService.findFirstValidNullableBoolean(params['allowAudible']),

        pageable: pageable
      }


      this.threadsFetechMachine.reset();
      this.threadsFetechMachine.context = {
        fetchInterface: this.threadApiService.fetchThreadsByFilter(threadsFetchFilterConfig),
        maxRefetchCount: 3
      }

      this.threadsFetechMachine.fetch().subscribe(data => {
        this.threadsConfig = [];
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
              username: thread.lnhUser.username,
              useremail: thread.lnhUser.useremail
            }
          })
        })

        this.threadsPaginatorConfig.pageSize = data.pageSize;
        this.threadsPaginatorConfig.totalElements = data.totalElements;
        console.log(pageable.pageNum >= data.totalPages ? data.totalPages -1 : pageable.pageNum)
        console.log(this.threadsPaginatorRef.getPage());
        console.log(this.threadsPaginatorRef.getPage() !== pageable.pageNum);
        if(this.threadsPaginatorRef.getPage() !== pageable.pageNum)
          setTimeout(() => this.threadsPaginatorRef.changePage(pageable.pageNum), 0);
      });

    })

  }

  initSearchFootprint() {

  }


  handleThreadsPaginatorChange(event){
    console.log(event);
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        threadsPageNum: event.page
      },
      queryParamsHandling: 'merge'
    });
  }

  handleContentsPaginatorChange(event){
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        contentsPageNum: event.page
      },
      queryParamsHandling: 'merge'
    });


    // let contentsFetchFilterConfig = {};
    // this.route.queryParams.subscribe(params => {
    //   contentsFetchFilterConfig = {
    //     series: params['series'],
    //     type: params['type'],
    //     genres: params['genres'],

    //     lnhUser: params['lnhUser'],
    //     allowAudible: params['allowAudible'],

    //     pageable: {
    //       pageNum: params['contentsPageNum'],
    //       pageSize: this.DEFAULT_PAGE_SIZE
    //     }
    //   }
    // })


    // this.contentsFetechMachine.reset();
    // this.contentsFetechMachine.context = {
    //   fetchInterface: this.threadApiService.fetchThreadsByFilter(contentsFetchFilterConfig),
    //   maxRefetchCount: 3
    // }
    // this.contentsFetechMachine.fetch().subscribe(data => {
    //   this.contentsData = data;

    //   this.loadingConfig.contentsLoadSuccess = true;
    //   this.loadingConfig.contentsLoading = false;
    // }, err => {
    //   this.loadingConfig.contentsLoadSuccess = false;
    //   this.loadingConfig.contentsLoading = false;
    // });
  }

  handleSearchChange(event){
    console.log('called')
    let queryParams = { };
    queryParams = {...queryParams, ...{ lnhUser : null }, ...{ series : null }};
    Object.keys(event)?.forEach(key => queryParams = { ...queryParams, ...{ [key]: event[key] }})

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: queryParams,
      queryParamsHandling: 'merge'
    });
  }

  handleLnhUserClick(event){
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        genres: null,
        lnhUser: event
      },
      queryParamsHandling: 'merge'
    });
  }

  handleSeriesClick(event){
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        genres: null,
        series: event
      },
      queryParamsHandling: 'merge'
    });
  }


}

