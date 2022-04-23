import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent implements OnInit {

  constructor( private app:AppComponent) { }
  font1=false;
  font2=false;
  font3=false;
  font4=false;
  onClick1(){
    this.font1=true;
  }
  onClick2(){
    this.font2=true;
  }
  onClick3(){
    this.font3=true;
    this.app.changeColor3();
  }
  onClick4(){
    this.font4=true;
  }
  ngOnInit(): void {
  }

}
