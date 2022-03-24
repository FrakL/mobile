import { Component, Input, OnInit } from '@angular/core';
//import { Confirmable, Emoji } from '../../decorators';

export interface Channel {
  id: number;
  icon: string;
  title: string;
  link: string;
}

@Component({
  selector: 'app-horizontal-grid',
  templateUrl: './horizontal-grid.component.html',
  styleUrls: ['./horizontal-grid.component.css'],
})
export class HorizontalGridComponent implements OnInit {
  private _username: string = '';
  //@Emoji() result = 'hello';
  @Input() cols: number = 8;
  @Input() displayCols: number = 5;
  sliderMargin = '0';
  constructor() {}

  ngOnInit() {}

  @Input()
  public get username(): string {
    return this._username;
  }

  public set username(value: string) {
    this._username = value;
  }

  // @Confirmable('Please confirm it!')
  // handleClick() {
  //   console.log('Clicked!');
  // }

  public get scrollable(): boolean {
    return this.cols > this.displayCols;
  }

  public get templateRows(): string {
    return `minmax(auto, max-content)`;
  }

  public get templateColumns(): string {
    return `repeat(${this.cols}, calc( (100vw - ${
      this.displayCols * 0.4
    }rem) / ${this.displayCols}))`;
  }

  handleScroll(ev: any) {
    this.sliderMargin = `0 ${
      (100 * ev.target.scrollLeft) / ev.target.scrollWidth
    }%`;
  }
}
