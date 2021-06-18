import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-section-header',
  templateUrl: './section-header.component.html',
  styleUrls: ['./section-header.component.css']
})
export class SectionHeaderComponent implements OnInit {

  @Input() set tabs(tabs: {label: string, icon: string, isActive?: boolean, lastUpdatedAt: string}[]){
    this._tabs = tabs;
    this._tabs.forEach(tab => tab.command = (event) => {
      this.activeTab = event.item;
      this.headerChange.emit(this.activeTab);
    });

    this.activeTab = this._tabs.filter(tab => tab.isActive)[0];
  }
  _tabs: {label: string, icon: string, isActive?: boolean, lastUpdatedAt: string, command?: any}[] = [];
  activeTab: {label: string, icon: string, lastUpdatedAt: string} = {label: '', icon: '', lastUpdatedAt: ''};

  @Output() headerChange: EventEmitter<any> = new EventEmitter();

  constructor() { }
  ngOnInit(): void { }

}
