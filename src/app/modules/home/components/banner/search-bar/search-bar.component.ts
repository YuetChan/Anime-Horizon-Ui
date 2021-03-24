import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { AutoComplete } from 'primeng/autocomplete';
import { SeriesApiService } from 'src/app/shared/services/series-api.service';
import { Series } from 'src/app/shared/models/entities/series'

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  @ViewChild('autoCompleteSeries', {static : false}) autoCompleteSeriessRef : AutoComplete;
  @Output() seriesSelected : EventEmitter<{seriesId : number; name : string}> = new EventEmitter();

  cachedSeries : Series[] = [];
  cachedSeriesNames : string[] = [];

  inputText = "";

  constructor(private seriesApi : SeriesApiService) { }
  ngOnInit(): void { }

  handleSeriesSearch(event) {
    this.seriesApi.querySeriesByPrefix(event.query).subscribe(datas => {
      this.clearCachedDatas();
      datas.forEach(data => {
        this.cachedSeries.push({seriesId : data.seriesId,name : data.name});
        this.cachedSeriesNames.push(data.name);
      });
    })
  }

  handleSeriesSelect(event) {
    const filteredSeries = this.cachedSeries.filter(series => series.name === this.inputText);
    this.seriesSelected.emit(filteredSeries[0]);

    this.inputText = "";
    this.clearCachedDatas();
  }

  handleKeyUp(event){
    const code = event.code;
    if(code === 'Enter'){
      const filteredSeries = this.cachedSeries.filter(series => series.name === this.inputText);
      if(filteredSeries.length)
        this.seriesSelected.emit(filteredSeries[0]);


      this.inputText = '';
      this.clearCachedDatas();

      this.autoCompleteSeriessRef.hide();
    }
  }

  handleOnBlur(event){ this.autoCompleteSeriessRef.writeValue(''); }

  clearCachedDatas(){
    this.cachedSeries = [];
    this.cachedSeriesNames = [];
  }

}
