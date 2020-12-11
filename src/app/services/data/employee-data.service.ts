import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Articoli } from 'src/app/articoli/articoli.component';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDataService {

  constructor(private httpClient:HttpClient) { }

    getEmployee() {
      return this.httpClient.get<Articoli[]>(`http://localhost:5000/testPostgresql/employeeList`);
    }
}
