import { CountryService } from './../country.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-country-component',
  templateUrl: './country-component.component.html',
  styleUrls: ['./country-component.component.css']
})
export class CountryComponentComponent implements OnInit {
  constructor(
    private countryService: CountryService
  ) { }

  ngOnInit() {
  }
}
