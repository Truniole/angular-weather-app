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

  getCountryInformation(country: string) {
    const url = `${this.countryUrl}${country}`;
    console.log(url);
    this.http.get(url).subscribe(data => {
      this.country = data[0];
      console.log(this.country);
      return this.country;
    });
  }
  getCountry(): Observable<any> {
    return this.country;
  }

}
