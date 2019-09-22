import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'apploguin';
  public User: "daniela";
  public email:"dani@hot.com";
  public password: "1234";
  public verBoton= true;
  
  

  login(){
    console.log('autenticando')
  }
}
