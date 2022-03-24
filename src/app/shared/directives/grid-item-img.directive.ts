import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appGridItemImg]',
})
export class GridItemImgDirective implements OnInit {
  @Input() appGridItemImg = '2rem';
  @Input() fitMode = 'cover';

  constructor(private ele: ElementRef, private rd2: Renderer2) {}

  ngOnInit(): void {
    this.rd2.setStyle(this.ele.nativeElement, 'grid-area', 'image');
    this.rd2.setStyle(this.ele.nativeElement, 'width', this.appGridItemImg);
    this.rd2.setStyle(this.ele.nativeElement, 'height', this.appGridItemImg);
    this.rd2.setStyle(this.ele.nativeElement, 'object-fit', this.fitMode);
  }

  @HostListener('click', ['$event.target'])
  handleClick(ev: any) {
    console.log(ev);
  }
}
