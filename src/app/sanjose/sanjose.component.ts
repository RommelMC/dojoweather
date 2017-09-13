import { Component, OnInit } from '@angular/core';
import {WeatherService} from './../weather.service'

@Component({
  selector: 'app-sanjose',
  templateUrl: './sanjose.component.html',
  styleUrls: ['./sanjose.component.css']
})
export class SanjoseComponent implements OnInit {
  weather;
  constructor(private _weatherService: WeatherService) { }

  ngOnInit() {
    this.getWeather();
  }

  getWeather(): void {
    this._weatherService.getWeather("sanjose").then(weather=>this.weather=weather);
  }
}
