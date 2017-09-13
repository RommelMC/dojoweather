import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class WeatherService {

  constructor(private _http: Http) { }

  getWeather(city: string): Promise<{}>{
    return this._http.get("https://api.openweathermap.org/data/2.5/weather?q="+city+"&APPID=ba27aeff7cabd15c10c705cfc58b15c4").map(response => response.json()).toPromise();
  }
}
