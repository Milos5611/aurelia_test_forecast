import { WeatherService } from './services/weather-service'
import { inject } from 'aurelia-framework';

@inject(WeatherService)
export class App {
  city = 'New York'; // added default city
  forcastlist;
  constructor(private weatherService: WeatherService) {}

  activate() {
    this.forecast();
  }

  forecast() {
    const city = this.city
    this.weatherService.getForecast(city).then(forecast => {
      this.forcastlist = forecast;
      console.log(this.forcastlist);
    }).catch(error => {
      console.log(error);
    });
  }
}
