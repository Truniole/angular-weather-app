import { CountryService } from '../country.service';
import { countries } from '../../countries';
import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

export interface Countries {
  name: string;
}

@Component({
  selector: 'app-form-autocomplete',
  templateUrl: './form-autocomplete.component.html',
  styleUrls: ['./form-autocomplete.component.css']
})

export class FormAutocompleteComponent implements OnInit {
  countryCtrl = new FormControl();
  filteredCountries: Observable<Countries[]>;
  countries: Countries[] = countries;
  private _filterCountries(value: string): Countries[] {
    const filterValue = value.toLowerCase();
    return this.countries.filter(country => country.name.toLowerCase().indexOf(filterValue) === 0);
  }
  constructor(private countryService: CountryService) {
    this.filteredCountries = this.countryCtrl.valueChanges
      .pipe(
        startWith(''),
        map(country => country ? this._filterCountries(country) : this.countries.slice())
      );
  }
  onSubmit(country) {
    this.countryService.getCountryInformation(country);
    this.countryService.getWeatherInformation(country);
  }
  ngOnInit() {
  }
}
