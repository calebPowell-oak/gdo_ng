import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { Door } from '../types';
import { DOORS } from '../../assets/doors';
import { GarageService } from '../garage.service';

@Component({
  selector: 'app-door-list',
  templateUrl: './door-list.component.html',
  styleUrls: ['./door-list.component.css']
})
export class DoorListComponent implements OnInit {

  doors: Door[];
  garageService: GarageService;
  constructor(
    garageService: GarageService
  ) {
    this.doors = DOORS;
    this.garageService = garageService;
  }

  ngOnInit() {
  }

  open(door: Door) {
    //alert(door.name + ' was opened.');
    this.garageService.open(door);
  }
}
