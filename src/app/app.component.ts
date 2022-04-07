import { AfterViewInit, Component } from '@angular/core';
declare var anime:any; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'angular-todolist-app';

  ngAfterViewInit() {
    anime({
      targets: '#titleSvg',
      translateX:[-350,0],
      delay: 500,
      duration: 2000,
    }) 
  }
}
