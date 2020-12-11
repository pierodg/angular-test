import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  
  title = 'chapterfour';
  saluti: string = 'Ciao da Piero';
  titolo2 = 'Seleziona i titoli da acquistare';

  user = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.user = this.route.snapshot.params['userid'];
    
  }

}
