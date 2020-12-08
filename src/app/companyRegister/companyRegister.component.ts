import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RegisterService } from './companyRegister.service';
import { CompanyRegisterDetails } from './CompanyRegisterDetails';


@Component({
  selector: 'app-register',
  templateUrl: './companyRegister.component.html',
  styleUrls: ['./companyRegister.component.scss'],
})
export class RegisterComponent implements OnInit {
  gotResponse: boolean;
  private compnayRegisterDetails = new CompanyRegisterDetails();

  constructor(private companyRegisterService: RegisterService, private router: Router) { }


  ngOnInit() {
  }

  companyRegisterForm = new FormGroup({
    fullName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
    role: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
    emailId: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    cnfPassword: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
  });

  companyRegister(registerInformation) {
    this.compnayRegisterDetails.fullName = this.FullName.value;
    this.compnayRegisterDetails.role = this.Role.value;
    this.compnayRegisterDetails.emailId = this.EmailId.value;
    this.compnayRegisterDetails.password = this.Password.value;
    this.compnayRegisterDetails.cnfPassword = this.ConfirmPassword.value;
    
    console.log("In componentt");
    console.log(this.compnayRegisterDetails);
    this.companyRegisterService.sendRegisterDetails(this.compnayRegisterDetails).subscribe(
      response => {
        if (Response) {
          this.gotResponse = true;
        }
        var records = JSON.stringify(response)
        console.log("Response =" + records);

        var statusCode = response.body.statusCode;
        console.log('Response Code =' + statusCode);

        if (statusCode == 201) {
          alert(response.body.message);
          this.router.navigate(['/clients', response]);
        }

        else if (statusCode == 200) {
          alert(response.body.message);
          this.router.navigate(['/clients', response]);
        }
        else {
          alert(response.body.message);
          this.router.navigate(['/companyRegisteration']);
        }
        error => ((error: any) => {
          console.log("Error in authentication");
          if (error.status === 500) {
            return Observable.throw(new Error(error.status));
          }
          else if (error.status === 400) {
            return Observable.throw(new Error(error.status));
          }
          else if (error.status === 409) {
            return Observable.throw(new Error(error.status));
          }
          else if (error.status === 406) {
            return Observable.throw(new Error(error.status));
          }
        });

      }
    );
  }

  get EmailId() {
    return this.companyRegisterForm.get('emailId');
  }

  get FullName() {
    return this.companyRegisterForm.get('fullName');
  }

  get Role() {
    return this.companyRegisterForm.get('role');
  }

  get Password() {
    return this.companyRegisterForm.get('password');
  }

  get ConfirmPassword() {
    return this.companyRegisterForm.get('cnfPassword');
  }
}

