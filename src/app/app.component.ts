import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularTask';
  phoneNo=9876543210;
  btn1=true;
  btn2=false;
  btn3=false;
  btn4=false;
  onSubmit(ele:any){
  
  }
 changeColor1(){
  this.btn2=false;
  this.btn3=false;
  this.btn4=false;
 }
 changeColor2(){
  this.btn2=true;
  this.btn3=false;
  this.btn4=false;
  
}
changeColor3(){
  this.btn2=true;
  this.btn3=true;
  this.btn4=false;
}
changeColor4(){
  this.btn2=true;
  this.btn3=true;
  this.btn4=true;
}


}
