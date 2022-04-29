import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-working',
  templateUrl: './working.component.html',
  styleUrls: ['./working.component.css']
})
export class WorkingComponent implements OnInit {

  phoneNo = 9876543210;
  btn1 = "btn1";
  btn2 = "btn2";
  btn3 = "btn3";
  btn4 = "btn4";
  font1 = "font1";
  font2 = "font2";
  font3 = "font3";
  font4 = "font4";
  year1 = "year1"
  year2 = "year2"
  year3 = "year3"
  year4 = "year4"
  selected = "";
  selectedfont = "";
  selectedyear = "";
  constructor(){
    this.selected=this.btn1;
  }
move(ele:any, prev:any, curr:any, next:any){
  
  if(ele.key=="Backspace"){
    if(prev){
      prev.focus();
    }
  }
  else{
    if(next && curr.length==curr.maxlength){
      next.focus();
    }
    
  }
}
  onSubmit(ele: any) {

  }
  changeColor(btn: any) {

    this.selected = btn;
  }

  onClick(font: any) {
    this.selectedfont = font;

  }
  changeYear(year:any){
    this.selectedyear=year;
  }

  ngOnInit(): void {
  }

}
