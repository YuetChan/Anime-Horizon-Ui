import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-edit',
  templateUrl: './content-edit.component.html',
  styleUrls: ['./content-edit.component.css']
})
export class ContentEditComponent implements OnInit {

  items = [
    {label: 'Novel', icon: ''},
    // {label: 'Audible', icon: ''}
  ]

  section = 'Content edit'
  lastUpdatedAt = "'Updated at Mar 20 '21 at 10:12: PM'";

  tableConfigs = [];



  constructor() { }
  ngOnInit(): void {
    this.tableConfigs.push({
      "title" : "Jobless Reincarnation Vol. 3",
      "series" : "Jobless Reincarnation",
      "view" : 12,
      "updatedAt" : "Mar 20 '21 at 10:12: PM"
    })

  }

  handleContentsPaginatorChange(event){

  }

}
