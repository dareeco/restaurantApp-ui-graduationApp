import { OrderComponent } from './order/order.component';
import { MenuComponent } from './menu/menu.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantSchemeComponent } from './restaurant-scheme/restaurant-scheme.component';

const routes: Routes = [


  {
    path:'menu', component: MenuComponent
  },
  {
    path:'bar', component: RestaurantSchemeComponent
  },
  {
    path:'order', component: OrderComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
