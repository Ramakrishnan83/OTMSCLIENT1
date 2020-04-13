import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { HttpHeaders } from '@angular/common/http';
import { TripDetails } from './trip-details';
import { Observable } from 'rxjs/internal/Observable';
import { Login } from './login';

@Injectable({
  providedIn: 'root'
})
export class TripDetailsService {
  url = 'http://localhost:1720/api/TripDetails'; 

  constructor(private Httpclient:HttpClient) { }

  getAllTripDetails(): Observable<TripDetails[]> 
      { 
     
       return this.Httpclient.get<TripDetails[]>('http://localhost:1720/api/TripDetails/' );  
      }  

  getTripDetailsById(TripId: string): Observable<TripDetails[]>
      {
       
          let url= 'http://localhost:1720/api/tripdetails/'+TripId;
          return this.Httpclient.get<TripDetails[]>(url);
        
     } 

  getUserbyId(User_ID:string):Observable<Login[]>
  {
    let url='http://localhost:1720/api/Users/'+User_ID;
    return this.Httpclient.get<Login[]>('http://localhost:1720/api/Users/'+User_ID);
  }
}
