import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Door } from './types';

@Injectable({
  providedIn: 'root'
})
export class GarageService {

  constructor(private http: HttpClient) {
  }

  open(door: Door){
    this.http
      .get('/api/pin/' + door.pinNumber)
      .subscribe();
  }
}
