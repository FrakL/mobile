import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appAgo',
})
export class AgoPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (value) {
      const seconds = Math.floor((+new Date() - +new Date(value)) / 1000);
      if (seconds < 30) {
        return 'just now';
      }
      const intervals = {
        Year: 3600 * 24 * 365,
        Month: 3600 * 24 * 30,
        Week: 3600 * 24 * 7,
        Day: 3600 * 24,
        Hour: 3600,
        Minus: 60,
        second: 1,
      };

      let counter = 0;
      let unitName: string;
      for (unitName in intervals) {
        if (intervals.hasOwnProperty(unitName)) {
          console.log('unitName is:', unitName);
          //const unitValue = intervals[unitName];
          //counter = Math.floor(seconds / unitValue);
          //if (counter > 0) {
          //  return `${counter} ${unitName}前`;
          //}
        }
      }
    }
    return null;
  }
}
