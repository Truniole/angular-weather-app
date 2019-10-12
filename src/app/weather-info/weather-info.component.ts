import { CountryService } from './../country.service';
import { WeatherService } from './../weather.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-info',
  templateUrl: './weather-info.component.html',
  styleUrls: ['./weather-info.component.css']
})
export class WeatherInfoComponent implements OnInit {

  constructor(
    private weatherService: WeatherService,
    private countryService: CountryService,
  ) { }
  ngOnInit() {
  }

}
