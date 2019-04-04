import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PlateSearchComponent } from './plate-search/plate-search.component';

const platesRoutes: Routes = [
  {
    path: 'plate-search', 
    component: PlateSearchComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(platesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class PlatesRoutingModule { }
