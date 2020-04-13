import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TripDetailsComponent } from './trip-details/trip-details.component';
import {LoginComponent}from './login/login.component';


const routes: Routes = [{path:'',pathMatch: 'full',component:LoginComponent},
                        {path: 'tripdetails', component: TripDetailsComponent},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
