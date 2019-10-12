import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
constructor(
  private http: HttpClient
) { }
  private countryUrl = 'https://restcountries.eu/rest/v2/name/';
  country;
  weather;
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
    this.http.get(weatherURL).subscribe(
      data => {
        console.log(JSON.stringify(data));
        this.weather = data;
        console.log(this.weather);
      },
      error => console.error('Weather api call not working', error)
    );
  }
}
