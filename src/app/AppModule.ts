import { NgModule }                from '@angular/core';
import { BrowserModule }           from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorHandler }            from '@angular/core';
import { FormsModule }             from '@angular/forms';
import { HttpModule }              from '@angular/http';

import { ToastModule }             from 'ng2-toastr/ng2-toastr';
import { ToastOptions }            from 'ng2-toastr';

import { AppComponent }            from './AppComponent';
import { AppRoutingModule, routingComponents }        from './AppRoutingModule';
import { AppErrorHandler }         from './errors/AppErrorHandler';
import { BankComponent }           from './bank/BankComponent';
import { BankService }             from './bank/BankService';
import { DashboardComponent }      from './dashboard/DashboardComponent';
import { DayComponent }            from './time/DayComponent';
import { AppToastOptions }         from './notifications/AppToastOptions';
import { NotificationService }     from './notifications/NotificationService';
import { NotificationsComponent }  from './notifications/NotificationsComponent';
import { PlantsComponent }         from './plants/PlantsComponent';
import { PlantsService }           from './plants/PlantsService';
import { BuyPlantsComponent }      from './plants/BuyPlantsComponent';
import { BuyShipsComponent }       from './ships/BuyShipsComponent';
import { MyShipsComponent }        from './ships/MyShipsComponent';
import { RepairShipsComponent }    from './ships/RepairShipsComponent';
import { SellShipsComponent }      from './ships/SellShipsComponent';
import { ShipsComponent }          from './ships/ShipsComponent';
import { ShipTypeFilter }          from './ships/ShipTypeFilter';
import { ShipTypeIconFilter }      from './ships/ShipTypeIconFilter';
import { ShipyardService }         from './ships/ShipyardService';
import { TimeService }             from './time/TimeService';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastModule.forRoot()
  ],
  declarations: [
    AppComponent,
    routingComponents,
    DayComponent,
    NotificationsComponent,
    ShipTypeIconFilter
  ],
  providers: [
    BankService,
    TimeService,
    NotificationService,
    PlantsService,
    ShipyardService,
    { provide: ErrorHandler, useClass: AppErrorHandler },
    { provide: ToastOptions, useClass: AppToastOptions }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
