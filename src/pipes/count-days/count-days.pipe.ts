import { Pipe, PipeTransform } from '@angular/core';
import { eachDayOfInterval } from 'date-fns';

@Pipe({
  name: 'countDays'
})
export class CountDaysPipe implements PipeTransform {

  transform(interval: [Date, Date]): number {    
    return eachDayOfInterval({start: interval[0], end: interval[1]}).length;
  }

}
