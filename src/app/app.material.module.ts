import {NgModule} from '@angular/core';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

@NgModule({
  exports: [
    MatAutocompleteModule,
    MatInputModule,
    MatSlideToggleModule,
  ]
})
export class AppMaterialModule { }
