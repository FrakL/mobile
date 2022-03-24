import { Component, Input, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { map, take, takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.css'],
})
export class CountDownComponent implements OnInit {
  @Input() startDate: Date = new Date();
  @Input() endDate: Date = new Date();
  private _MS_PER_SECOND = 1000;

  countDown$!: Observable<string>;
  constructor() {}

  ngOnInit() {
    this.countDown$ = interval(1000).pipe(
      map((elapse) => {
        return this.diffInSec(this.startDate, this.endDate) - elapse;
      }),
      takeWhile((gap) => gap >= 0),
      map((sec) => ({
        day: Math.floor(sec / 3600 / 24),
        hour: Math.floor((sec / 3600) % 24),
        minute: Math.floor((sec / 60) % 60),
        second: Math.floor(sec % 60),
      })),
      //map((date) => `${date.day}:${date.hour}:${date.minute}:${date.second}`)
      map(({ hour, minute, second }) => `${hour}:${minute}:${second}`)
    );
  }

  private diffInSec = (start: Date, end: Date): number => {
    const diff = end.getTime() - start.getTime();
    return Math.floor(diff / this._MS_PER_SECOND);
  };
}
