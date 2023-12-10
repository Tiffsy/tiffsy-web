import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginSignupComponent } from './login-signup/login-signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FaqComponent } from './faq/faq.component';

const routes: Routes = [
  {path: 'login', component: LoginSignupComponent},
  {path:'dashboard',component: DashboardComponent},
  {path: '', component: DashboardComponent},
  {path: 'faq' ,component: FaqComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
