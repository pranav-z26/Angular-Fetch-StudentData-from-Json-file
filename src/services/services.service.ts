import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

import {TimetableM} from '../app/models/timetable/timetable.module'
@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private httpClient:HttpClient) { }
  
  getData():Observable<Array<TimetableM>>{
    return this.httpClient.get<Array<TimetableM>>('http://localhost:3000/TimeTable');
  }
}
