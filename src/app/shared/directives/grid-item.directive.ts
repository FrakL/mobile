import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appGridItem]',
})
export class GridItemDirective implements OnInit {
  constructor(private ele: ElementRef, private rd2: Renderer2) {}

  ngOnInit(): void {
    this.rd2.setStyle(this.ele.nativeElement, 'display', 'grid');
    this.rd2.setStyle(
      this.ele.nativeElement,
      'grid-template-areas',
      `'image' 'title'`
    );
    this.rd2.setStyle(this.ele.nativeElement, 'place-items', 'center');
    this.rd2.setStyle(this.ele.nativeElement, 'width', '4rem');
  }
}
