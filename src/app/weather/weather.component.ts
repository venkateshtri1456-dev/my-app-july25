import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {

  weatherClimate:any []=[];
  constructor(private _weatherService:WeatherService){
    _weatherService.getclimate().subscribe((data:any)=>{
      console.log(data);
      this.weatherClimate=data;
      console.log("weather:",this.weatherClimate);
    },(err:any)=>{
      alert("Internal Server Error");
    }
  )
  }

}
