import { Component, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ImageSliderComponent, TopMenu } from 'src/app/shared/components';
import { token } from '../../services';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.css'],
})
export class HomeContainerComponent implements OnInit {
  @ViewChild(ImageSliderComponent) imageSlider!: ImageSliderComponent;
  topMenus: TopMenu[] = [];

  constructor(
    private router: Router,
    private homeService: HomeService,
    @Inject(token) private baseUrl: string
  ) {}

  ngOnInit() {
    this.homeService.getTabs().subscribe((data) => {
      this.topMenus = data;
    });
    console.log('token is:', this.baseUrl);
  }

  handleTabSelected(topMenu: TopMenu) {
    //console.log(tabMenu);
    this.router.navigate(['home', topMenu.link]);
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log('ImageSliderComponent', this.imageSlider);
  }
}
