import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable, BehaviorSubject } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Plant } from './Plant';
import { BankService } from '../bank/BankService';
import { SuccessNotification } from '../notifications/Notification';
import { NotificationService } from '../notifications/NotificationService';
import { TimeService } from '../time/TimeService';

@Injectable()
export class PlantsService {

  private subject: BehaviorSubject<Plant[]>;
  private subscription: Subscription;

  constructor(private bank: BankService, private notifications: NotificationService, private time: TimeService, private http: Http) {

    let plants: Plant[];

    if (localStorage.getItem('plants')) {
      plants = JSON.parse(localStorage.getItem('plants'));
    } else {
      plants = new Array<Plant>();
    }

    this.subject = new BehaviorSubject(plants);

    this.subscription = this.time.day.subscribe(() => this.nextDay());
  }

  get plants(): Observable<Plant[]> {
    return this.http.get('assets/data/plants.json')
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  get myPlants(): Observable<Plant[]> {
    return this.subject.asObservable();
  }

  isTooExpensive(plant: Plant) {
    return plant.price > this.bank.funds;
  }

  buy(plant: Plant) {
    this.bank.pay(plant.price);
    this.add(plant);
    this.notifications.add(new SuccessNotification('Plant acquired', 'A new new plant has been acquired.'));
  }

  private add(plant: Plant) {
    let plants: Plant[] = this.subject.getValue();

    let found: Plant;

    if (found = plants.find(myPlant => myPlant.name === plant.name)) {
      found.count = found.count + 1;
      console.log(found);
    } else {
      plant.count = 1;
      plants.push(plant);
    }

    this.subject.next(plants);
    localStorage.setItem('plants', JSON.stringify(plants));
  }

  private nextDay() {
    let plants: Plant[] = this.subject.getValue();
    plants.forEach(plant => this.produce(plant));
    //console.log(plants);
    this.subject.next(plants);
    //localStorage.setItem('plants', JSON.stringify(plants));
  }

  private produce(plant: Plant) {
    console.log(plant.name + ' produce');
  }
}
