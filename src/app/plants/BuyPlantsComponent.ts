import { Component, OnInit, OnDestroy } from '@angular/core';
import { Plant } from './Plant';
import { PlantsService } from './PlantsService';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'buy-plants',
  templateUrl: './BuyPlantsComponent.html'
})
export class BuyPlantsComponent implements OnInit, OnDestroy {

  plants: Plant[];
  private subscription: Subscription;

  constructor(public service: PlantsService) { }

  ngOnInit(): void {
    this.subscription = this.service.plants.subscribe(
      plants => this.plants = plants
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
