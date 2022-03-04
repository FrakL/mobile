import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  QueryList,
  Renderer2,
  ViewChild,
  ViewChildren,
} from '@angular/core';

export interface ImageSlider {
  imgUrl: string;
  link: string;
  caption: string;
}

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css'],
})
export class ImageSliderComponent implements OnInit, AfterViewInit {
  @Input() sliders: ImageSlider[] = [];
  @Input() scrollHeight = '160px';
  @ViewChild('imageSlider') imgSlider!: ElementRef;
  @ViewChildren('img') imgs!: QueryList<ElementRef>;

  constructor(private rd2: Renderer2) {}

  ngOnInit() {
    //this.imgSlider.nativeElement.innerHTML = `<span>Hellodd</span>`;
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log('111', this.imgSlider);
    console.log('222', this.imgs);
    //this.imgs.forEach((item) => (item.nativeElement.style.height = '100px'));
    this.imgs.forEach((item) => {
      this.rd2.setStyle(item.nativeElement, 'height', '100px');
    });
  }
}
