import { Component } from '@angular/core';
import { Plant } from './Plant';
import { PlantsService } from './PlantsService';

@Component({
  selector: 'my-plants',
  templateUrl: './MyPlantsComponent.html'
})
export class MyPlantsComponent {

  constructor(public service: PlantsService) { }
}
