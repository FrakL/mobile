import { AfterViewInit, Component, ViewChild } from '@angular/core';
import {
  ImageSlider,
  ImageSliderComponent,
  TopMenu,
} from './shared/components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  @ViewChild(ImageSliderComponent) imageSlider!: ImageSliderComponent;
  topMenus: TopMenu[] = [
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

  imageSliders: ImageSlider[] = [
    {
      imgUrl: '../assets/photo01.jfif',
      link: '',
      caption: '',
    },
    {
      imgUrl: '../assets/photo02.jfif',
      link: '',
      caption: '',
    },
    {
      imgUrl: '../assets/photo03.jfif',
      link: '',
      caption: '',
    },
    {
      imgUrl: '../assets/photo04.jfif',
      link: '',
      caption: '',
    },
  ];

  handleTabSelected(tabMenu: TopMenu) {
    console.log(tabMenu);
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log('ImageSliderComponent', this.imageSlider);
  }
}
