import { AfterViewInit, Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
declare var anime:any; 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger(
      'inOutAnimation', 
      [
        transition(
          ':enter', 
          [
            style({ opacity: 0 }),
            animate('.5s ease-out', style({ display: 'block'})),
            animate('.5s ease-out', style({ opacity: 1})),

          ]
        ),
      ]
    )
  ]
})
export class HomeComponent implements OnInit,AfterViewInit {

  constructor() { }

  //INFO: User info to resgister.
  username:String = '';
  password:String = '';
  email:String = '';


  //? Default -> Register = true;
  boolRegister:boolean = false;
  boolLogin:boolean = true; 
  
  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    anime({
      targets: '.main-p-home',
      opacity: [0,1],
      delay: 200,
      duration: 1300,
      easing: 'easeInOutQuad'
    }) 
  }
  switchForm(){
    this.boolRegister = !this.boolRegister;
    this.boolLogin = !this.boolLogin;; 
  }
  RegisterUser(){
    console.log("Register User");
  }

}
