import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationPageComponent } from "./registration-page/registration-page.component"
import {LoginPageComponent} from "./login-page/login-page.component";
import {CarouselComponent} from "./carousel/carousel.component";
const routes: Routes = [
  { path:'', component:RegistrationPageComponent },
  {path:'login',component:LoginPageComponent},
  {path:'carousel',component:CarouselComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
