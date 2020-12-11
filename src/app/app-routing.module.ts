import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorPageComponent } from './error-page/error-page.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ArticoliComponent } from './articoli/articoli.component';


const routes: Routes = [
  {path:'', component: LoginComponent}, // senza path
  {path:'login', component: LoginComponent},
  {path:'welcome/:userid', component: WelcomeComponent},
  {path:'articoli', component: ArticoliComponent},
  {path:'**', component: ErrorPageComponent} // path errato
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
