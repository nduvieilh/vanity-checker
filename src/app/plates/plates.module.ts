import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlatesListComponent } from './plates-list/plates-list.component';
import { PlateComponent } from './plate/plate.component';
import { PlateSearchComponent } from './plate-search/plate-search.component';
import { PlatesRoutingModule } from './plates-routing.module';

@NgModule({
  declarations: [PlatesListComponent, PlateComponent, PlateSearchComponent],
  imports: [
    CommonModule,
    PlatesRoutingModule
  ]
})
export class PlatesModule { }
