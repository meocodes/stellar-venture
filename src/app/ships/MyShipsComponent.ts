import { Component } from '@angular/core';
import { Ship } from './Ship';
import { ShipyardService } from './ShipyardService';

@Component({
  selector: 'my-ships',
  templateUrl: './MyShipsComponent.html'
})
export class MyShipsComponent {

  constructor(public shipyard: ShipyardService) { }
}
