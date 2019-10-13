import { CountryService } from './../country.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-info',
  templateUrl: './weather-info.component.html',
  styleUrls: ['./weather-info.component.css']
})
export class WeatherInfoComponent implements OnInit {

  constructor(
    public countryService: CountryService,
  ) { }

  ngOnInit() {
  }

}
