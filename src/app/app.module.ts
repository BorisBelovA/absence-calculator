import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AbsenceListModule } from 'src/components/absence-list/absence-list.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewAbsenceModule } from 'src/components/new-absence/new-absence.module';
import { LocalStorageService } from 'services';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AbsenceListModule,
    BrowserAnimationsModule,
    NewAbsenceModule
  ],
  providers: [ LocalStorageService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
