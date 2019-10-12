import { CountryComponentComponent } from './country-component/country-component.component';
import { WeatherInfoComponent } from './weather-info/weather-info.component';
import { FormAutocompleteComponent } from './form-autocomplete/form-autocomplete.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppMaterialModule } from './app.material.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    FormAutocompleteComponent,
    WeatherInfoComponent,
    CountryComponentComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppMaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [],
})
export class AppModule { }
