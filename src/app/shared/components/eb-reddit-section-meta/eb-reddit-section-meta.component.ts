import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-eb-reddit-section-meta',
  templateUrl: './eb-reddit-section-meta.component.html',
  styleUrls: ['./eb-reddit-section-meta.component.css']
})
export class EbRedditSectionMetaComponent implements OnInit {

  @Input() section = "";
  @Input() lastUpdatedAt = "";

  constructor() { }
  ngOnInit(): void { }

}
