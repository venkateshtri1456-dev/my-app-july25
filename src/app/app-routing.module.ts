import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
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
import { EmployeeComponent } from './employee/employee.component';
import { ProductTaskComponent } from './product-task/product-task.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { MailComponent } from './mail/mail.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { PinInterestComponent } from './pin-interest/pin-interest.component';
import { WeatherComponent } from './weather/weather.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { IdCardComponent } from './id-card/id-card.component';
import { AddStudentsComponent } from './add-students/add-students.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { CreateAccountDetailsComponent } from './create-account-details/create-account-details.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { ViewStudentDetailsComponent } from './view-student-details/view-student-details.component';
import { AuthenticationGuard } from './authentication.guard';
import { Sibling1Component } from './sibling1/sibling1.component';
import { ParentComponent } from './parent/parent.component';


const routes: Routes = [
  // {path:'', component:LoginComponent},    // default routing
  {path:'',component:LoginComponent},

  {path:'dashboard',component:DashboardComponent,canActivate:[AuthenticationGuard] ,children:[
    {path:'home',component:HomeComponent},
     {path:'gallery',component:GalleryComponent}, // child routing
     {path:'welcome',component:WelcomeComponent},
     {path:'data-binding',component:DataBindingComponent},
     {path:'calculator',component:CalculatorComponent},
     {path:'rectangle',component:RectangleComponent},
     {path:'circle',component:CircleComponent},
     {path:'bmi',component:BmiComponent},
     {path:'directives',component:DirectivesComponent },
     {path:'employee',component:EmployeeComponent },
     {path:'employee',component:EmployeeComponent },
     {path:'product-task',component:ProductTaskComponent },
     {path:'vehicle',component:VehicleComponent },
     {path:'mail',component:MailComponent },
     {path:'flipkart',component:FlipkartComponent },
     {path:'pinInterest',component:PinInterestComponent },
     {path:'weather',component:WeatherComponent },
     {path:'create-vehicle',component:CreateVehicleComponent },
     {path:'idCard',component:IdCardComponent },
     {path:'addStudents',component:AddStudentsComponent },
     {path:'accountDetails',component:AccountDetailsComponent },
     {path:'createUser',component:CreateUserComponent },
     {path:'createAccountDetails',component:CreateAccountDetailsComponent },
     {path:'vehicle-details/:id',component:VehicleDetailsComponent },
     {path:'edit-vehicle/:id',component:CreateVehicleComponent },
     {path:'viewStudentDetails/:id',component:ViewStudentDetailsComponent },
     {path:'editStudentDetails/:id',component:AddStudentsComponent },
     {path:'sibling',component:Sibling1Component },
     {path:'parent',component:ParentComponent },
      {
    path:'payments',
    loadChildren: ()=> import('./payments/payments.module').then(m=> m.PaymentsModule)
  }
     


  ]},  //parent routing



   {path:'**', component:ErrorComponent}, // wild/error routing

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
