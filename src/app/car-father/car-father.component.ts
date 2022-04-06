import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-father',
  templateUrl: './car-father.component.html',
  styleUrls: ['./car-father.component.css']
})
export class CarFatherComponent implements OnInit {
  car:string = ''

  constructor() {
   }

  ngOnInit(): void {
  }

  onClearButton() {
    this.car = '';
  }
}
