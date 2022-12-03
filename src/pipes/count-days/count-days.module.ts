import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountDaysPipe } from './count-days.pipe';



@NgModule({
  declarations: [
    CountDaysPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CountDaysPipe
  ]
})
export class CountDaysModule { }
