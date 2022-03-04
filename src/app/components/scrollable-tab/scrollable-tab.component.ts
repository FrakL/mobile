import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface TopMenu {
  title: string;
  link?: string;
}

interface AddFunc {
  (x: number, y: number): number;
}

@Component({
  selector: 'app-scrollable-tab',
  templateUrl: './scrollable-tab.component.html',
  styleUrls: ['./scrollable-tab.component.css'],
})
export class ScrollableTabComponent implements OnInit {
  selectedIndex = -1;
  title = 'Mobile Mall';
  @Input() menus: TopMenu[] = [];
  @Input() backgroundColor: string = 'white';
  @Input() titleActiveColor: string = 'yellow';
  @Input() titleColor: string = 'blue';
  @Input() indicatorColor: string = 'brown';
  @Output() tabSelected = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  add: AddFunc = (x, y) => x + y;

  handleSelection(index: number) {
    this.selectedIndex = index;
    this.tabSelected.emit(this.menus[this.selectedIndex]);
  }
}
