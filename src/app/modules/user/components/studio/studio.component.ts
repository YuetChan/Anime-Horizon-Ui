import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-studio',
  templateUrl: './studio.component.html',
  styleUrls: ['./studio.component.css']
})
export class StudioComponent implements OnInit {

  tabs = [{
    label: 'Content edit',
    icon: '',
    isActive: true,
    lastUpdatedAt: "Updated at Mar 20 '21 at 10:12: PM"
  },{
    label: 'Subscriber',
    icon: '',
    lastUpdatedAt: "Updated at Mar 20 '21 at 10:12: PM"
  }]

  activeTab = this.tabs.filter(tab => tab.isActive)[0];

  constructor() { }
  ngOnInit(): void { }

  handleSectionHeaderChange(event){ this.activeTab = event; }

}
