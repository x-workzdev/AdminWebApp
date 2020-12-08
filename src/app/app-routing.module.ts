import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { ViewGadgetsComponent } from './gadgets/gadgets.component';
import { ViewClientRegistersComponent } from './clients/clients.component';
import { ViewticketsComponent } from './tickets/tickets.component';
import { SignupComponent } from './clientRegister/clientRegister.component';
import { RegisterComponent } from './companyRegister/companyRegister.component';


const routes: Route[] = [
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'signup', component:SignupComponent},
  {path:'companyRegisteration', component:RegisterComponent},
  {path : 'profile',component : ProfileComponent},
  {path : 'clients',component : ViewClientRegistersComponent},
  {path : 'tickets',component : ViewticketsComponent},
  {path : 'gadgets',component : ViewGadgetsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
