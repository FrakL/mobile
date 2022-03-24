import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  HomeContainerComponent,
  HomeDetailComponent,
  HomeGrandComponent,
} from './components';

const routes: Routes = [
  {
    path: 'home',
    component: HomeContainerComponent,
    children: [
      {
        path: '',
        redirectTo: 'hot',
        pathMatch: 'full',
      },
      {
        path: ':tabLink',
        component: HomeDetailComponent,
        children: [{ path: 'grand', component: HomeGrandComponent }],
      },
    ],
  },
  {
    path: 'grand',
    component: HomeGrandComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
