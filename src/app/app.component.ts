import { CountryService } from './country.service';
import { countries } from './../countries';
import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

export interface Countries {
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(
    private countryService: CountryService
  ) {
    this.filteredCountries = this.countryCtrl.valueChanges
      .pipe(
        startWith(''),
        map(country => country ? this._filterCountries(country) : this.countries.slice())
      );
  }
  countryCtrl = new FormControl();
  filteredCountries: Observable<Countries[]>;
  countries: Countries[] = countries;
  response;
  private _filterCountries(value: string): Countries[] {
    const filterValue = value.toLowerCase();

    return this.countries.filter(country => country.name.toLowerCase().indexOf(filterValue) === 0);
  }
  ngOnInit() {
    this.countryService.getCountryInformation('Finland').subscribe(data => {
      this.response = data[0];
      console.log(this.response);
      console.log(this.response.capital);
    });
  }
}
