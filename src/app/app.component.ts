
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  selected : string = '0';
  status: Number = 1;
  text1: string = 'Start Interview';
  disabled1: boolean = true;
  disabled2: boolean = true;
  betaColor: string = 'yellow';
  seeResultsLink: string = ''
  surveyId: string = '';
  flag: boolean = true;
  newConfig: any;
  showFiller = false;
  hideSideNav = false;
  title = 'pma-app';
  mode: any = 'side';
  position: any= 'left'
  view = '';

  ngOnInit(): void {

    
  }
}
