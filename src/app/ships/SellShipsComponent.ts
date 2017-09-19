import { Component } from '@angular/core';
import { ShipyardService } from './ShipyardService';

@Component({
  selector: 'ship-sell',
  templateUrl: './SellShipsComponent.html'
})
export class SellShipsComponent {

  constructor(public shipyard: ShipyardService) { }
}
