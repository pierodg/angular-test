import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userid = '';
  password = '';
  auth = true;
  success = false;
  errorMsg = 'Errore nel login';
  loginMsg = 'Benvenidos';
  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  gestAut() {

    if (this.userid === 'Piero' && this.password === 'ciao') {
      //this.auth = true;
      this.success = true;

     this.route.navigate(['welcome', this.userid]);

    } else {
      console.log(this.errorMsg);

      this.auth = false;
    }

  }

}
