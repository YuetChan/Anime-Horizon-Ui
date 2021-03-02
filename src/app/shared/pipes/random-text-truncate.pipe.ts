import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'randomTextTruncate'
})
export class RandomTextTruncatePipe implements PipeTransform {

  transform(value: string, min : number, range : number): string { return value.length < min ? value : value.substring(0,  min + Math.ceil(Math.random() * (range))) + "..."; }

}
