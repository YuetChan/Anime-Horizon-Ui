import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-request-progress',
  templateUrl: './request-progress.component.html',
  styleUrls: ['./request-progress.component.css']
})
export class RequestProgressComponent implements OnInit {

  @Input() progressedValue : number = 0;

  constructor() { }
  ngOnInit(): void {}

}
