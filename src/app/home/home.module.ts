import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import {
  HomeContainerComponent,
  HomeDetailComponent,
  HomeGrandComponent,
} from './components';
import { token } from './services';

@NgModule({
  declarations: [
    HomeContainerComponent,
    HomeDetailComponent,
    HomeGrandComponent,
  ],
  imports: [SharedModule, HomeRoutingModule],
  providers: [{ provide: token, useValue: 'http://local.dev' }],
})
export class HomeModule {}
