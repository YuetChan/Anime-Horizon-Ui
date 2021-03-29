import { NgModule } from '@angular/core';
import { PiTimeAgoPipe } from './pipes/pi-time-ago.pipe';
import { RandomTextTruncatePipe } from './pipes/random-text-truncate.pipe';

@NgModule({
  declarations: [
    RandomTextTruncatePipe,
    PiTimeAgoPipe
  ],
  imports: [],
  exports: [
    RandomTextTruncatePipe,
    PiTimeAgoPipe
  ]
})
export class SharedModule { }
