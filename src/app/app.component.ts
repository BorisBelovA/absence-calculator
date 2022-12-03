import { Component } from '@angular/core';
import * as models from 'models';
import { parse } from 'date-fns';
import { LocalStorageService } from 'services';

const storageKey = 'absence';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'absence-calculator';

  public absence: models.Absence[] = this.storage.getItems(storageKey).map(m => this.mapToModel(m));

  constructor(
    private storage: LocalStorageService<models.RawAbsence>
  ) {}

  public onDeleteItem(item: models.Absence): void {
    this.absence = this.absence.filter(a => a.id !== item.id);
    this.updateStorage();
  }

  public onAddAbsence(item: models.NewAbsence): void {
    this.absence.push({
      id: this.absence.length + 1,
      ...item
    });
    this.updateStorage();
  }

  private updateStorage(): void {
    this.storage.setItems(storageKey, this.absence.map(
      m => this.mapToRaw(m)
    ));
  }

  private mapToRaw(model: models.Absence): models.RawAbsence {
    return {
      ...model,
      startDate: model.startDate.toISOString(),
      endDate: model.endDate.toISOString()
    }
  }

  private mapToModel(raw: models.RawAbsence): models.Absence {
    return {
      ...raw,
      startDate: new Date(raw.startDate),
      endDate: new Date(raw.endDate)
    }
  }
}
