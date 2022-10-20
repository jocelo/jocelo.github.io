import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  public saveData(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  public getData(key: string): string {
    return localStorage.getItem(key);
  }

  public removeData(key: string) {
    localStorage.removeItem(key);
  }

  public clearData() {
    localStorage.clear();
  }

  public serializeData(data: object): any {
    console.log('this the original data');
    console.log(data);
    const serializedData = data;
    console.log('this the serialized data');
    console.log(serializedData);

    return serializedData;
  }

  public unSerializeData() {

  }
}
