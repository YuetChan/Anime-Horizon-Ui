import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { ThreadConfig } from '../../models/thread-config';

@Component({
  selector: 'app-thread',
  templateUrl: './thread.component.html',
  styleUrls: ['./thread.component.css']
})
export class ThreadComponent implements OnInit {

  @Output() seriesClick : EventEmitter<string> = new EventEmitter();
  @Output() lnhUserClick : EventEmitter<string> = new EventEmitter();
  @Input() threadConfig : ThreadConfig;

  val = 5;

  constructor() { }
  ngOnInit(): void { }

  handleSeriesClick(event){ this.seriesClick.emit(event); }
  handleLnhUserClick(event) { this.lnhUserClick.emit(event); }

}

