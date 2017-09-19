import { Component } from '@angular/core';
import { Ship } from './Ship';
import { ShipyardService } from './ShipyardService';

@Component({
  selector: 'ship-repair',
  templateUrl: './RepairShipsComponent.html'
})
export class RepairShipsComponent {

  constructor(public shipyard: ShipyardService) { }

  isTooExpensive(ship: Ship): boolean {
    // TODO implementation
    return false;
  }
}
