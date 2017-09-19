import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ship }              from './Ship';
import { ShipyardService }   from './ShipyardService';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'ship-purchase',
  templateUrl: './BuyShipsComponent.html'
})
export class BuyShipsComponent implements OnInit, OnDestroy {

  ships: Ship[];
  private subscription: Subscription;

  constructor(public shipyard: ShipyardService) { }

  ngOnInit(): void {
    this.subscription = this.shipyard.ships.subscribe(
      ships => this.ships = ships
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
