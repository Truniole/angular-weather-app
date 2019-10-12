import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

apiurl = 'https://api.weatherstack.com/current?access_key=';
apikey = '216e2df0df2e47a1b9b185208191707';
constructor(
  private http: HttpClient
) { }
  getCapitalWeather(city: string) {
    return this.http.get('https://api.weatherstack.com/current?access_key=216e2df0df2e47a1b9b185208191707&query=Helsinki');
  }
}
