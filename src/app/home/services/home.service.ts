import { HttpClient } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Channel, ImageSlider, TopMenu } from 'src/app/shared/components';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private http: HttpClient) {}

  getTabs() {
    return this.http.get<TopMenu[]>(`${environment.baseUrl}/topMenus`);
  }

  getImageSliders(): Observable<ImageSlider[]> {
    return this.http.get<ImageSlider[]>(`${environment.baseUrl}/imageSliders`);
  }

  getChannels() {
    return this.http.get<Channel[]>(`${environment.baseUrl}/channels`);
  }
}
