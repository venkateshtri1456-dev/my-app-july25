import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { MywebsiteComponent } from './mywebsite/mywebsite.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';
import { BmiComponent } from './bmi/bmi.component';
import { FormsModule } from '@angular/forms';
import { DirectivesComponent } from './directives/directives.component';
import { EmployeeComponent } from './employee/employee.component';
import { ProductTaskComponent } from './product-task/product-task.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ErrorComponent,
    HomeComponent,
    GalleryComponent,
    MywebsiteComponent,
    WelcomeComponent,
    DataBindingComponent,
    CalculatorComponent,
    RectangleComponent,
    CircleComponent,
    BmiComponent,
    DirectivesComponent,
    EmployeeComponent,
    ProductTaskComponent,
    VehicleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
