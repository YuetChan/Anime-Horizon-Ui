import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subscriber',
  templateUrl: './subscriber.component.html',
  styleUrls: ['./subscriber.component.css']
})
export class SubscriberComponent implements OnInit {

  tableConfigs = [];

  constructor() { }
  ngOnInit(): void {
    this.tableConfigs.push({
      'useremail' : 'cchan@ms3-inc.com',
      'username' : 'cchan',
      "joinedAt" : "Mar 20 '21 at 10:12: PM"
    })
  }

  handleSubscriberPaginatorChange(event){

  }

}
