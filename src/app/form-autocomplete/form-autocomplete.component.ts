import { CountryService } from '../country.service';
import { countries } from '../../countries';
import {Component, OnInit} from '@angular/core';
import {FormControl, FormBuilder} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith, count} from 'rxjs/operators';

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
  country: object;
  submitForm;
  constructor(
    private countryService: CountryService,
    private formBuilder: FormBuilder,
  ) {
    this.filteredCountries = this.countryCtrl.valueChanges
      .pipe(
        startWith(''),
        map(country => country ? this._filterCountries(country) : this.countries.slice())
      );
  }
  private _filterCountries(value: string): Countries[] {
    const filterValue = value.toLowerCase();
    return this.countries.filter(country => country.name.toLowerCase().indexOf(filterValue) === 0);
  }
  onSubmit(country) {
    console.log(country);
    this.countryService.getCountryInformation(country);
  }
  ngOnInit() {
    this.submitForm = this.formBuilder.group({
      name: '',
    });
  }
}
