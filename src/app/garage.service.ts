import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Door } from './types';

@Injectable({
  providedIn: 'root'
})
export class GarageService {

  url: string;

  constructor(private http: HttpClient) {
    this.url = environment.baseUrl;
  }

  open(door: Door){
    this.http
      .get(this.url + 'pin/' + door.pinNumber)
      .subscribe();
  }
}
