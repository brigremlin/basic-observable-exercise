import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodsComponent } from './foods/foods.component';
import { HomeComponent } from './home/home.component';
import { TimerComponent } from './timer/timer.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: "users/:id", component: UsersComponent},
  { path: "foods/:search", component: FoodsComponent},
  { path: 'home', component: HomeComponent},
  { path: 'timer', component: TimerComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
