import { Pipe, PipeTransform } from '@angular/core';
import { Plant } from './Plant';

@Pipe({ name: 'plantTypeIconClass' })
export class PlantTypeIconFilter implements PipeTransform {
  transform(plant: Plant): string {
    switch (plant.type) {
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
