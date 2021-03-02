import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Overview} from '../model/overview'

@Component({
  selector: 'app-overviews',
  templateUrl: './overviews.component.html',
  styleUrls: ['./overviews.component.css']
})
export class OverviewsComponent implements OnInit {

  @Input() overviews : Overview[] = [];

  constructor() { }
  ngOnInit(): void { }

}




