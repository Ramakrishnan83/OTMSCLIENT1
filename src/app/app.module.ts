import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TripDetailsComponent } from './trip-details/trip-details.component';
import { AgGridModule } from '@ag-grid-community/angular';
import { TripDetailsService } from './trip-details.service';  
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  
import { HttpClientModule, HttpClient } from '@angular/common/http';  



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TripDetailsComponent
  ],
  imports: [
    BrowserModule,  
    FormsModule,  
    ReactiveFormsModule,  
    HttpClientModule,  
        AppRoutingModule,
        RouterModule,
        AgGridModule.withComponents([])
  ],
  providers: [HttpClientModule,TripDetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
