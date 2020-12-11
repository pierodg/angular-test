import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent implements OnInit {

  errorMsg = 'Ops! La pagina non è disponibile o non è stata trovata!'

  constructor() { }

  ngOnInit(): void {
  }

}
