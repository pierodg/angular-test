import { Component, OnInit } from '@angular/core';
import {EmployeeDataService } from '../services/data/employee-data.service';

export class Articoli {
  constructor(
    public codart: string,
    public desc: string,
    public scad: Date,
    public pz: number

  ) { }
}

@Component({
  selector: 'app-articoli',
  templateUrl: './articoli.component.html',
  styleUrls: ['./articoli.component.css']
})
export class ArticoliComponent implements OnInit {
  NumArt = 0;
  articoli : Articoli[];
 
  
  constructor(private articoliService: EmployeeDataService) { }

  ngOnInit(): void {

    this.articoliService.getEmployee().subscribe(
    response => {
      console.log(response);
      this.articoli = response;

    })
    }

}
