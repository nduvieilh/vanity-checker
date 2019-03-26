import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PlatesModule } from './plates/plates.module';
import { ContactModule } from './contact/contact.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { ConstsModule } from './consts/consts.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PlatesModule,
    ContactModule,
    MatToolbarModule,
    MatTabsModule,
    ConstsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
