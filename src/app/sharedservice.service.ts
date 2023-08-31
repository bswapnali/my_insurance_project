import { Injectable } from '@angular/core';
import { BackendData } from './DemoPages/Dashboards/ManagePlans/manageplan/manageplan.component';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SharedserviceService {

  constructor(private http: HttpClient) { }

  getData(): Observable<BackendData> {
    return this.http.get<BackendData>('/api/data');
  }
}
