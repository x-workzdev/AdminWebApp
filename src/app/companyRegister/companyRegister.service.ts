import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CompanyRegisterDetails } from './CompanyRegisterDetails';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private httpClient: HttpClient, private router : Router){}

  sendRegisterDetails(companyDetails : CompanyRegisterDetails) : Observable<any> {
    console.log(companyDetails);
    return this.httpClient.post(environment.apiUrl+'companyRegistration',companyDetails,{observe:'response', responseType: 'json'});
  }
}
