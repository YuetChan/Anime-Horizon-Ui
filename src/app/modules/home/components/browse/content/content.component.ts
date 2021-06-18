import { Component, Input, OnInit, SecurityContext } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  @Input() set innerHtml(html : string){
    this._innerHtml = this.sanitizer.bypassSecurityTrustHtml(html);
  }

  @Input() contentConfig : {
    series?: string,
    title?: string,
    contents?: []

    lnhUser?: {
      useremail: string,
      username: string
    }
    editedAt?: Date,
  } = {}

  _innerHtml : SafeHtml = "";

  constructor(private sanitizer : DomSanitizer) { }
  ngOnInit(): void { }

}
