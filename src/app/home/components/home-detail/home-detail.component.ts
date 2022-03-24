import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Channel, ImageSlider } from 'src/app/shared/components';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeDetailComponent implements OnInit {
  selectedTabLink$!: Observable<any>;
  imageSliders$!: Observable<ImageSlider[]>;
  channels$!: Observable<Channel[]>;

  constructor(
    private router: ActivatedRoute,
    private homeService: HomeService,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.selectedTabLink$ = this.router.paramMap.pipe(
      filter((params) => params.has('tabLink')),
      map((params) => params.get('tabLink'))
    );
    // ((paras) => {
    //   this.selectedTabLink$ = paras.get('tabLink');
    //   this.cd.markForCheck();
    // });
    this.imageSliders$ = this.homeService.getImageSliders();
    // .subscribe((data) => {
    //   this.imageSliders = data;
    //   this.cd.markForCheck();
    // });

    this.channels$ = this.homeService.getChannels();
    // .subscribe((data) => {
    //   this.channels = data;
    //   this.cd.markForCheck();
    // });
  }
}
