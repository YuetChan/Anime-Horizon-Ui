import { Component, Input, OnInit } from '@angular/core';
import { ThreadConfig } from '../../models/thread-config';

@Component({
  selector: 'app-thread',
  templateUrl: './thread.component.html',
  styleUrls: ['./thread.component.css']
})
export class ThreadComponent implements OnInit {

  @Input() threadConfig : ThreadConfig;

  constructor() { }
  ngOnInit(): void { }

}

