import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';
import { BmiComponent } from './bmi/bmi.component';
import { DirectivesComponent } from './directives/directives.component';

const routes: Routes = [
  {path:'', component:LoginComponent},    // default routing

  {path:'dashboard',component:DashboardComponent ,children:[
    {path:'home',component:HomeComponent},
     {path:'gallery',component:GalleryComponent}, // child routing
     {path:'welcome',component:WelcomeComponent},
     {path:'data-binding',component:DataBindingComponent},
     {path:'calculator',component:CalculatorComponent},
     {path:'rectangle',component:RectangleComponent},
     {path:'circle',component:CircleComponent},
     {path:'bmi',component:BmiComponent},
     {path:'directives',component:DirectivesComponent },
  ]},  //parent routing



   {path:'**', component:ErrorComponent}, // wild/error routing

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
