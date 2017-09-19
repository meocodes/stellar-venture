import { Pipe, PipeTransform } from '@angular/core';
import { Ship } from './Ship';

@Pipe({ name: 'shipTypeFilter', pure: false })
export class ShipTypeFilter implements PipeTransform {
  transform(ships: Ship[], type: string): any {
    if (!ships || !type) {
      return ships;
    }
    return ships.filter(ship => ship.type.indexOf(type) !== -1);
  }
}
