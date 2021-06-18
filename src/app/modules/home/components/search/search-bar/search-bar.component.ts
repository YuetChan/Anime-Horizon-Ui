import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  @ViewChild('searchBarInput') searchBarInput : ElementRef;

  series = '';

  demoList = [
    'demo1',
    'demo2'
  ]

  constructor() { }
  ngOnInit(): void {}

  handleSearchBarKeyup(event){
    console.log(event);
    if(this.searchBarInput.nativeElement.value === '' && event.key === 'ArrowDown'){
      console.log('pull the list');
    }
    console.log(event.key === undefined);
  }
  handleSearchBarBlur(event){
    console.log('second')

  }
  // handleSearchBarMousedown(event){
  //   console.log('first')
  // }

  handleSelectChange(event){
    this.searchBarInput.nativeElement.value = '';
    console.log(this.series);
  }

}
