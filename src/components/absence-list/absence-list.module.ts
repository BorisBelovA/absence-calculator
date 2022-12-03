import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbsenceListComponent } from './absence-list.component';
import { FieldsetModule } from 'primeng/fieldset';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CountDaysModule } from 'src/pipes/count-days/count-days.module';
import { KnobModule } from 'primeng/knob';



@NgModule({
  declarations: [
    AbsenceListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    FieldsetModule,
    InputTextModule,
    ButtonModule,
    CountDaysModule,
    KnobModule
  ],
  exports: [AbsenceListComponent]
})
export class AbsenceListModule { }
