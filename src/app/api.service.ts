import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StudentDetailsModel } from 'src/model/StudentDetailsModel';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
  }

  getData(): Observable<StudentDetailsModel[]> {
    return this.http.get<StudentDetailsModel[]>('http://localhost:3000/details');
  }

  getdataFilter(to: number, from: number, attributeName:string): Observable<StudentDetailsModel[]> {
    return this.http.get<StudentDetailsModel[]>(`http://localhost:3000/details?${attributeName}_gte=${to}&${attributeName}_lte=${from}`)
  }

  getBySearch(searchedData: string) :Observable<StudentDetailsModel[]>{
    return this.http.get<StudentDetailsModel[]>(`http://localhost:3000/details?q=${searchedData}`);
  }
}
