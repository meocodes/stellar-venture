import { Injectable }                              from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable, BehaviorSubject }                              from 'rxjs/Rx';
import { Subject }                                 from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { BankService }         from '../bank/BankService';
import { Notification, SuccessNotification }        from '../notifications/Notification';
import { NotificationService } from '../notifications/NotificationService';
import { Ship }                from './Ship';
import { ShipNotFoundError }   from './ShipNotFoundError';

@Injectable()
export class ShipyardService {

  private subject: BehaviorSubject<Ship[]>;

  constructor(private bank: BankService, private notifications: NotificationService, private http: Http) {

    let ships: Ship[];

    if (localStorage.getItem('fleet')) {
      ships = JSON.parse(localStorage.getItem('fleet'));
    } else {
      ships = new Array<Ship>();
    }

    this.subject = new BehaviorSubject(ships);
  }

  get ships(): Observable<Ship[]> {
    return this.http.get('assets/data/ships.json')
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  get myShips(): Observable<Ship[]> {
    return this.subject.asObservable();
  }

  isTooExpensive(ship: Ship) {
    return ship.price > this.bank.funds;
  }

  buy(ship: Ship) {
    this.bank.pay(ship.price);
    this.add(ship);
    this.notifications.add(new SuccessNotification('Ship acquired', 'A new ship has been added to your fleet.'));
  }

  sell(index: number) {
    var fleet: Ship[] = this.subject.getValue();
    if (fleet && index > -1 && index < fleet.length) {
      var ship = this.subject.getValue()[index];
      var price = this.sellPrice(ship);
      this.remove(index);
      this.bank.pay(-price);
      this.notifications.add(new SuccessNotification('Ship sold', 'Sold ' + ship.type + ' ' + ship.class + ' for ' + price + 'C'));
    } else {
      throw new ShipNotFoundError();
    }
  }

  private sellPrice(ship: Ship): number {
    return (60 / 100) * ship.price;
  }

  private add(ship: Ship) {
    var fleet: Ship[] = this.subject.getValue();
    fleet.push(ship);
    this.subject.next(fleet);
    localStorage.setItem('fleet', JSON.stringify(fleet));
  }

  private remove(index: number) {
    var fleet: Ship[] = this.subject.getValue();
    fleet.splice(index, 1);
    this.subject.next(fleet);
    localStorage.setItem('fleet', JSON.stringify(fleet));
  }
}
