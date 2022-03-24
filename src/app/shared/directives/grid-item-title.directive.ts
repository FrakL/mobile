import {
  Directive,
  ElementRef,
  HostBinding,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appGridItemTitle]',
})
export class GridItemTitleDirective implements OnInit {
  //@Input() appGridItemTitle = '0.5rem';
  @HostBinding('style.grid-area') title = 'title';
  @HostBinding('style.font-size') @Input() appGridItemTitle = '0.5rem';

  constructor(private ele: ElementRef, private rd2: Renderer2) {}

  ngOnInit(): void {
    //this.rd2.setStyle(this.ele.nativeElement, 'grid-area', 'title');
  }
}
