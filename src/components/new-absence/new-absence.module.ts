import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewAbsenceComponent } from './new-absence.component';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { ReactiveFormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';


@NgModule({
  declarations: [
    NewAbsenceComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputTextModule,
    InputNumberModule,
    CalendarModule,
    ButtonModule,
    CardModule
  ],
  exports: [
    NewAbsenceComponent
  ]
})
export class NewAbsenceModule { }
