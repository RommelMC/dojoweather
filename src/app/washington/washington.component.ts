import { Component, OnInit } from '@angular/core';
import {WeatherService} from './../weather.service'

@Component({
  selector: 'app-washington',
  templateUrl: './washington.component.html',
  styleUrls: ['./washington.component.css']
})
export class WashingtonComponent implements OnInit {
  weather;
  constructor(private _weatherService: WeatherService) { }

  ngOnInit() {
    this.getWeather();
  }

  getWeather(): void {
    this._weatherService.getWeather("washingtondc").then(weather=>this.weather=weather);
  }
}
