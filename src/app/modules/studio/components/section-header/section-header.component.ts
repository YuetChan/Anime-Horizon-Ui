import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-header',
  templateUrl: './section-header.component.html',
  styleUrls: ['./section-header.component.css']
})
export class SectionHeaderComponent implements OnInit {

  @Input() items = [{label: '', icon: ''}]

  @Input() section = ''
  @Input() lastUpdatedAt = '';

  constructor() { }
  ngOnInit(): void { }

}
