import { Component } from '@angular/core';

interface TopMenu {
  title: string;
  link?: string;
}
interface AddFunc {
  (x: number, y: number): number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
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

  add: AddFunc = (x, y) => x + y;

  handleSelection(index: number) {
    this.selectedIndex = index;
  }
}
