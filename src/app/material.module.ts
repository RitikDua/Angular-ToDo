
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';

import {MatExpansionModule} from '@angular/material/expansion';
@NgModule({
   imports: [
      CommonModule,
      MatInputModule,
      MatListModule,
      MatExpansionModule,
      MatCheckboxModule,
      MatDatepickerModule,
      MatAutocompleteModule
   		,MatChipsModule,
   		MatIconModule,
   		MatButtonModule
   ],
   exports: [

      MatInputModule,
      MatListModule,MatExpansionModule,
      MatCheckboxModule,
      MatDatepickerModule,
      MatAutocompleteModule
   ,MatChipsModule,MatButtonModule,
   		MatIconModule],
   providers: [
      MatDatepickerModule

   ]
})

export class MaterialModule { }