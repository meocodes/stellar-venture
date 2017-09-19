import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BankComponent }        from './bank/BankComponent';
import { DashboardComponent }   from './dashboard/DashboardComponent';
import { PlantsComponent }      from './plants/PlantsComponent';
import { BuyPlantsComponent }   from './plants/BuyPlantsComponent';
import { MyPlantsComponent }    from './plants/MyPlantsComponent';
import { ShipsComponent }       from './ships/ShipsComponent';
import { MyShipsComponent }     from './ships/MyShipsComponent';
import { BuyShipsComponent }    from './ships/BuyShipsComponent';
import { RepairShipsComponent } from './ships/RepairShipsComponent';
import { SellShipsComponent }   from './ships/SellShipsComponent';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'bank', component: BankComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'plants', component: PlantsComponent },
  { path: 'plants/buy', component: BuyPlantsComponent },
  { path: 'plants/my', component: MyPlantsComponent },
  { path: 'ships', component: ShipsComponent },
  { path: 'ships/buy', component: BuyShipsComponent },
  { path: 'ships/my', component: MyShipsComponent },
  { path: 'ships/repair', component: RepairShipsComponent },
  { path: 'ships/sell', component: SellShipsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  BankComponent,
  BuyPlantsComponent,
  BuyShipsComponent,
  MyPlantsComponent,
  DashboardComponent,
  MyShipsComponent,
  PlantsComponent,
  RepairShipsComponent,
  SellShipsComponent,
  ShipsComponent
];
