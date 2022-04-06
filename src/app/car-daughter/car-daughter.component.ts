import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-car-daughter',
  templateUrl: './car-daughter.component.html',
  styleUrls: ['./car-daughter.component.css']
})
export class CarDaughterComponent implements OnInit {

  constructor() { }

  @Input() selectedCar = ''
  ngOnInit(): void {
  }

}
