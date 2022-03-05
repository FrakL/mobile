import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnDestroy,
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
export class ImageSliderComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() sliders: ImageSlider[] = [];
  @Input() sliderHeight = '160px';
  @Input() intervalBySeconds: number = 2;
  selectedIndex = 0;
  intervalId: any;
  @ViewChild('imageSlider') imgSlider!: ElementRef;
  @ViewChildren('img') imgs!: QueryList<ElementRef>;

  constructor(private rd2: Renderer2) {}

  ngOnInit() {
    //this.imgSlider.nativeElement.innerHTML = `<span>Hellodd</span>`;
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    //this.imgs.forEach((item) => (item.nativeElement.style.height = '100px'));
    // this.imgs.forEach((item) => {
    //   this.rd2.setStyle(item.nativeElement, 'height', '100px');
    // });
    this.intervalId = setInterval(() => {
      this.rd2.setProperty(
        this.imgSlider.nativeElement,
        'scrollLeft',
        (this.getIndex(++this.selectedIndex) *
          this.imgSlider.nativeElement.scrollWidth) /
          this.sliders.length
      );
    }, this.intervalBySeconds * 1000);
  }

  getIndex(idx: number): number {
    return idx >= 0
      ? idx % this.sliders.length
      : this.sliders.length - (Math.abs(idx) % this.sliders.length);
  }

  handleScroll(e: any) {
    const radio =
      (e.target.scrollLeft * this.sliders.length) / e.target.scrollWidth;
    this.selectedIndex = Math.round(radio);
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    clearInterval(this.intervalId);
  }
}
