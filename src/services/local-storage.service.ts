import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService<T> {

  constructor() { }

  public setItems(key: string, items: T[]): void {
    localStorage.setItem(key, JSON.stringify(items));
  }

  public hasItems(key: string): boolean {
    return !!localStorage.getItem(key);
  }

  public getItems(key: string): T[] {
    return this.hasItems(key)
      ? JSON.parse(localStorage.getItem(key)!)
      : [];
  }
}
