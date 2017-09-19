import { Pipe, PipeTransform } from '@angular/core';
import { Ship } from './Ship';

@Pipe({ name: 'shipTypeIconClass' })
export class ShipTypeIconFilter implements PipeTransform {
  transform(ship: Ship): string {
    switch (ship.type) {
      case 'Tanker':
        return 'fa-flask';
      case 'Bulk cargo freighter':
        return 'fa-stack-overflow';
      case 'General cargo freighter':
        return 'fa-cubes'
      default:
        return 'fa-rocket';
    }
  }
}
