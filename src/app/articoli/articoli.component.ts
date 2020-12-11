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
articoli : Articoli[] | undefined;

 /* articoli = [
    new Articoli('001', 'Prodotto 1', new Date(), 50),
    new Articoli('002', 'Prodotto 2', new Date(), 54),
    new Articoli('003', 'Prodotto 3', new Date(), 222),
    new Articoli('004', 'Prodotto 4', new Date(), 1009)

  ] */
  
  constructor(private articoliService: EmployeeDataService) { }

  ngOnInit(): void {

    this.articoliService.getEmployee().subscribe(
    response => {
      console.log(response);
      this.articoli = response;

    })
    }

}
