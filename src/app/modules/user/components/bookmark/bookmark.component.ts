import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.css']
})
export class BookmarkComponent implements OnInit {

  tabs = [{
    label: 'Bookmarks',
    icon: '',
    isActive: true,
    lastUpdatedAt: "Updated at Mar 20 '21 at 10:12: PM"
  }]

  tableConfigs = [];

  constructor() { }
  ngOnInit(): void {
    this.tableConfigs.push({
      'title' : 'Jobless Reincarnation Vol. 3',
      'view' : 12,
      "updatedAt" : "Mar 20 '21 at 10:12: PM"
    })
  }

  handleBookmarkPaginatorChange(event){ }

}
