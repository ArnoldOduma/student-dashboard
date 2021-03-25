import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {StudentData} from "../model/dataModel";


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  _data: any

  constructor(private http: HttpClient) {}

  getData(): any {
    return this.http.get('../../assets/data.json')
      .pipe(
        map(response => {
          this._data = response;
          console.log(this._data);
          return response;
        })
      );
  }
}
