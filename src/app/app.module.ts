import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {DataTablesModule} from 'angular-datatables';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ViewGadgetsComponent } from './gadgets/gadgets.component';
import { CommonModule } from '@angular/common';
import { LoginService } from './login/login.service';
import { ViewClientRegistersComponent } from './clients/clients.component';
import { ProfileComponent } from './profile/profile.component';
import { ViewticketsComponent } from './tickets/tickets.component';
import { DeviceDetectorService } from 'ngx-device-detector';
import { SignupComponent } from './clientRegister/clientRegister.component';
import { RegisterComponent } from './companyRegister/companyRegister.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SignupComponent,
    ProfileComponent,
    ViewClientRegistersComponent,
    ViewticketsComponent,
    ViewGadgetsComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    DataTablesModule,
    CommonModule,
  ],
  providers: [LoginService,DeviceDetectorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
