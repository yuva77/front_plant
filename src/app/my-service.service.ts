import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { data_structure } from './shared/data_structure';
@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  private apiUrl = 'http://localhost:1050/checkdata/';
  // private apiUrl1 = 'http://localhost:1050/checkdata1/';
  private apiUrl1 = 'https://backend-7t8s.onrender.com/checkdata1/';


  constructor(private http: HttpClient) { }


  checkDataInDatabase(inputData: any): Observable<any> {
    console.log("seervice");
    console.log(inputData)
    const url = `${this.apiUrl1}`;
    console.log(url)
    console.log(inputData)

    return this.http.post<any>(url,inputData);
  }


}
