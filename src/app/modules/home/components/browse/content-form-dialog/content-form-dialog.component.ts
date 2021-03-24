import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-form-dialog',
  templateUrl: './content-form-dialog.component.html',
  styleUrls: ['./content-form-dialog.component.css']
})
export class ContentFormDialogComponent implements OnInit {

  isEdited = true;
  label = this.isEdited ? 'Edit post' : 'Create post';
  displayModal = true;

  types = [
    {
      name : 'Novel',
      code : 'novel',
      inactive : false
    }, {
      name : 'Audible',
      code : 'audible',
      inactive : false
    },{
      name : 'Review',
      code : 'review',
      inactive : false
    },{
      name : 'Analysis',
      code : 'analysis',
      inactive : false
    }
  ]

  genres = [
    {
      name : 'Fantasy',
      code : 'fantasy',
      inactive : false
    },{
      name : 'Comedy',
      code : 'comedy',
      inactive : false
    },{
      name : 'Adventure',
      code : 'adventure',
      inactive : false
    },{
      name : 'Romance ',
      code : 'romance',
      inactive : false
    },{
      name : 'Non Human ',
      code : 'non_human',
      inactive : false
    },{
      name : 'Isekai',
      code : 'isekai',
      inactive : false
    },{
      name : 'Action',
      code : 'action',
      inactive : false
    },{
      name : 'School Life',
      code : 'school_life',
      inactive : false
    }
  ]

  permissions = [
    {
      name : 'Allow Audible',
      code : 'allow_audible',
      tip : 'Allow any user to audible the material',
      inactive : false
    }
  ]

  selectedType = '';
  selectedGenres = [];

  doesSeriesExisted = null;

  warningMsgForNonExistiedSeries = 'Since series does not exist in the record, it would be registered';

  constructor() { }
  ngOnInit(): void { }

}
