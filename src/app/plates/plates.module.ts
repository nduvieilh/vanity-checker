import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlatesListComponent } from './plates-list/plates-list.component';
import { PlateComponent } from './plate/plate.component';
import { PlateSearchComponent } from './plate-search/plate-search.component';
import { PlatesRoutingModule } from './plates-routing.module';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [PlatesListComponent, PlateComponent, PlateSearchComponent],
  imports: [
    CommonModule,
    PlatesRoutingModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    SharedModule
  ]
})
export class PlatesModule { }
