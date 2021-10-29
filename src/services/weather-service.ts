import {HttpClient} from "aurelia-http-client";
import { autoinject } from "aurelia-framework";

@autoinject
export class WeatherService {
  constructor(private httpClient: HttpClient) {
    this.httpClient.configure(config => {
      config.withBaseUrl('https://api.openweathermap.org/data/2.5/');
    })
  }

  getForecast(city) {
    const appId = 'a33fe525c4b6d05b730b5817625a6a8b';
    return new Promise((resolve, reject) => {
      this.httpClient.get('forecast?q=' + city + '&appid=' + appId).then(httpResponse=> {
        const forecast = JSON.parse(httpResponse.response);
        resolve(forecast.list);
      }).catch( error => {
        reject(error);
      });
    });
  }

}
