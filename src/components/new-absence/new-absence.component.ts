import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { eachDayOfInterval } from 'date-fns';
import * as models from 'models';

const dateValidator = (abstractControl: any): ValidationErrors | null => {
  const startDate: Date | null = abstractControl.get('startDate').value;
  const endDate: Date | null = abstractControl.get('endDate').value;
  if (startDate && endDate) {
    return eachDayOfInterval({start: startDate, end: endDate}).length <= 90
      ? null
      : { tooManyDaysAtOnce: 'Одна поездка не должна быть дольше 90 дней' };
  }
  return null;
}

@Component({
  selector: 'app-new-absence',
  templateUrl: './new-absence.component.html',
  styleUrls: ['./new-absence.component.scss']
})
export class NewAbsenceComponent implements OnInit {

  @Output()
  public addAbsence = new EventEmitter<models.NewAbsence>();

  public displayBtn = true;

  public form = new FormGroup({
    name: new FormControl<string | null>(null, [
      Validators.required,
      Validators.minLength(2)
    ]),
    startDate: new FormControl<Date | null>(null, [
      Validators.required
    ]),
    endDate: new FormControl<Date | null>(null, [
      Validators.required
    ])
  }, [ dateValidator ]);

  constructor() { }

  ngOnInit(): void {
  }

  public add(): void {
    const {name, startDate, endDate} = this.form.value;
    if (name && startDate && endDate) {
      this.addAbsence.emit({ name, startDate, endDate });
    }
    this.form.reset();
    this.displayBtn = true;
  }
}
