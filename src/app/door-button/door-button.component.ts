import { Component, OnInit, Input } from '@angular/core';
import { Door } from '../types';

@Component({
  selector: 'app-door-button',
  templateUrl: './door-button.component.html',
  styleUrls: ['./door-button.component.css']
})
export class DoorButtonComponent implements OnInit {

  @Input()door: Door;
  buttonText: string;

  constructor() {}

  ngOnInit() {
    this.buttonText = this.door.name + ' garage door';
  }
}
