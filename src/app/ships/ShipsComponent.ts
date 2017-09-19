import { Component } from '@angular/core';
import { ShipyardService } from './ShipyardService';

@Component({
  selector: 'ships',
  templateUrl: './ShipsComponent.html',
  providers: [ShipyardService]
})
export class ShipsComponent {

  constructor(public shipyard: ShipyardService) { }
}
