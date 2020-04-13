import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';  
import { Observable } from 'rxjs';  
import { TripDetailsService } from '../trip-details.service';  
import { TripDetails } from '../trip-details';  
import { debug } from 'util';
import {Login} from '../login';
import {AllCommunityModules} from '@ag-grid-community/all-modules';

@Component({
  selector: 'app-trip-details',
  templateUrl: './trip-details.component.html',
  styleUrls: ['./trip-details.component.css']
})
export class TripDetailsComponent implements OnInit {


  
  allTripDetails: Observable<TripDetails[]>; 
  
  constructor( private tripservice:TripDetailsService) { }

  ngOnInit() 
  {
    this.loadAllTripDetails();
  }

  loadAllTripDetails( ) 
  { 
    debugger; 
    let user=sessionStorage.getItem('loggeduser');
    if(user=="1")
      {
        this.allTripDetails=this.tripservice.getTripDetailsById(user);
      }
    else
      {
          this.allTripDetails = this.tripservice.getAllTripDetails();
      }

  }
  columnDefs = [
    {headerName: 'Make', field: 'make' },
    {headerName: 'Model', field: 'model' },
    {headerName: 'Price', field: 'price'}
];



modules = AllCommunityModules;

}
