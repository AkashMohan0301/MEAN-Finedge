import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.css']
})
export class OperationsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  values={
    v1 : 0,
    v2 :0,
    result : 0,
  }
  hide=true
  pstyle=""
styles="border:2px solid black;height:400px;width:800px;margin:auto;"
instyles="margin-right: 40px;margin-top: 50px;height: 30px;"
addition(){
  this.values.result=this.values.v1+this.values.v2
  this.hide=false
  this.pstyle="color:Green"
}
Substraction(){
  this.values.result=this.values.v1-this.values.v2
  this.hide=false
  this.pstyle="color:Red"

}
Multiplication(){
  this.values.result=this.values.v1*this.values.v2
  this.hide=false
  this.pstyle="color:rgb(0, 75, 128)"

}
Division(){
  this.values.result=this.values.v1/this.values.v2
  this.hide=false
  this.pstyle="color:rgb(165, 230, 37)"

}
reset(){
  this.values.v1=0
  this.values.v2=0
  this.values.result=0
  this.hide=true
}

}
