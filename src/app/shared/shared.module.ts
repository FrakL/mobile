import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  ScrollableTabComponent,
  ImageSliderComponent,
  HorizontalGridComponent,
  CountDownComponent,
} from './components/';
import {
  GridItemDirective,
  GridItemImgDirective,
  GridItemTitleDirective,
} from './directives';
import { AgoPipe } from './pipe';

@NgModule({
  declarations: [
    ScrollableTabComponent,
    ImageSliderComponent,
    HorizontalGridComponent,
    CountDownComponent,
    GridItemDirective,
    GridItemImgDirective,
    GridItemTitleDirective,
    AgoPipe,
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    CommonModule,
    FormsModule,
    ScrollableTabComponent,
    ImageSliderComponent,
    HorizontalGridComponent,
    CountDownComponent,
    GridItemDirective,
    GridItemImgDirective,
    GridItemTitleDirective,
    AgoPipe,
  ],
})
export class SharedModule {}
