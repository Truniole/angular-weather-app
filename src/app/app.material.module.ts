import {NgModule} from '@angular/core';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
@NgModule({
  exports: [
    MatAutocompleteModule,
    MatInputModule,
    MatSlideToggleModule,
    MatButtonModule,
  ]
})
export class AppMaterialModule { }
