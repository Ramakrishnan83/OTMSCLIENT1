import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute  } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {TripDetails} from '../trip-details';
import {AppRoutingModule} from '../app-routing.module';
import {TripDetailsService} from '../trip-details.service';
import{Login} from '../login';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  user: Observable<Login[]>; 
  constructor(private formBuilder: FormBuilder,
    private router: Router,private tripservice:TripDetailsService) { }

  ngOnInit() {
  }
  login() {
    this.user=this.tripservice.getUserbyId(this.model.User_Id);
    
    if(this.user==null)
    {
      
      this.router.navigate(['/Login']);
    }
    else
    {
      this.router.navigate(['/tripdetails']);
    }
      sessionStorage.setItem('loggeduser',this.model.User_Id);
  }

}
