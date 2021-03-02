import {Pipe, PipeTransform} from '@angular/core';
import {TimeAgoPipe} from 'time-ago-pipe';
import {addDays, format, isBefore} from 'date-fns'

@Pipe({
  name: 'piTimeAgo'
})
export class PiTimeAgoPipe extends TimeAgoPipe implements PipeTransform {

  transform(dateStr: string): string {
    const date = new Date(dateStr);
    const numOflookAheadDays = -2;

    if(isBefore(date, addDays(new Date(), numOflookAheadDays)))
      return format(date, "MMM dd") + " '" + format(date, "yy") + " at " + format(date, "h:mm: a");
    else
      return super.transform(dateStr);
  }

}
