import { Component, OnInit } from '@angular/core';

interface TopMenu {
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
  menus: TopMenu[] = [
    { title: 'Hot', link: '' },
    { title: 'Man Cloth', link: '' },
    { title: 'SuperMarket', link: '' },
    { title: 'Sport', link: '' },
    { title: 'Cell Phone', link: '' },
    { title: 'Beds', link: '' },
    { title: 'Food', link: '' },
    { title: 'Electric', link: '' },
    { title: 'Shoes Bag', link: '' },
    { title: 'Car', link: '' },
    { title: 'Friute', link: '' },
    { title: 'Laptop', link: '' },
    { title: 'Baby', link: '' },
  ];

  constructor() {}

  ngOnInit(): void {}

  add: AddFunc = (x, y) => x + y;

  handleSelection(index: number) {
    this.selectedIndex = index;
  }
}
