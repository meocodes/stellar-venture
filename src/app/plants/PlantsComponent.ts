import { Component } from '@angular/core';
import { PlantsService } from './PlantsService';

@Component({
  selector: 'plants',
  templateUrl: './PlantsComponent.html',
  providers: [PlantsService]
})
export class PlantsComponent {

  constructor(public service: PlantsService) { }
}
