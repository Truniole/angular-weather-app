import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
constructor(
  private http: HttpClient
) { }
  // tslint:disable-next-line: ban-types
  country;
  weather;

  private countryUrl = 'https://restcountries.eu/rest/v2/name/';
  private weatherUrl = 'http://api.weatherstack.com/current';
  private weatherApiKey = 'b34fd393762769b642061a491ab7b5b4';

  getCountryInformation(country: string) {
    const countryURL = `${this.countryUrl}${country}`;
    const weatherURL = `${this.weatherUrl}?access_key=${this.weatherApiKey}&query=${country}`;
    console.log(countryURL);
    console.log(weatherURL);
    this.http.get(countryURL).subscribe(
      data => this.country = data[0],
      error => console.error('Country api call not working', error)
    );
  }
  getWeatherInformation(country: string) {
    const weatherURL = `${this.weatherUrl}?access_key=${this.weatherApiKey}&query=${country}`;
    console.log(weatherURL);
    this.http.get(weatherURL).subscribe(
      data => {
        this.weather = data;
        console.log(this.weather);
        console.log(this.weather.current.temperature);
      },
      error => console.error('Weather api call not working', error)
    );
  }
}
