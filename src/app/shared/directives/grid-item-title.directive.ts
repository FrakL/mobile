import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appGridItemTitle]',
})
export class GridItemTitleDirective implements OnInit {
  constructor(private ele: ElementRef, private rd2: Renderer2) {}

  ngOnInit(): void {
    this.rd2.setStyle(this.ele.nativeElement, 'grid-area', 'title');
  }
}
