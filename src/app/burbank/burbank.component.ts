import { Component, OnInit } from '@angular/core';
import {WeatherService} from './../weather.service'
@Component({
  selector: 'app-burbank',
  templateUrl: './burbank.component.html',
  styleUrls: ['./burbank.component.css']
})
export class BurbankComponent implements OnInit {
  weather;
  constructor(private _weatherService: WeatherService) { }

  ngOnInit() {
    this.getWeather();
  }

  getWeather(): void {
    this._weatherService.getWeather("burbank").then(weather=>this.weather=weather);
  }
}
