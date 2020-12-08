import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable, Observer, of, observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { clientRegisterDetails } from './ClientRegisterDetails';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private httpClient: HttpClient, private router : Router) { }

  sendSignUpDetails(clientDetails : clientRegisterDetails) : Observable<any> {
    console.log(clientDetails);
    return this.httpClient.post(environment.apiUrl+'registration',clientDetails,{observe:'response', responseType: 'json'});
  }
}
