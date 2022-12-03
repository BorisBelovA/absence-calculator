import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as models from 'models';

@Component({
  selector: 'app-absence-list',
  templateUrl: './absence-list.component.html',
  styleUrls: ['./absence-list.component.scss']
})
export class AbsenceListComponent implements OnInit {
  
  @Input()
  public absences: models.Absence[] = [];

  @Output()
  public deleteItem = new EventEmitter<models.Absence>();

  constructor() { }

  public ngOnInit(): void {
  }

  public delete(item: models.Absence): void {
    this.deleteItem.emit(item);
  }

}
