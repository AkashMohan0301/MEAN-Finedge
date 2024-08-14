import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
count=0
counter(){
  this.count++
}
counter_down(){
  this.count--
}
reset(){
  this.count=0
}
num=0
str=''
styles=""
odd_or_even()
{
  if(this.num%2==0){
    this.str="This is Even"
    this.styles="color:red"
}
else{
  this.str="This Number is Odd"
  this.styles="color:blue"
}
}
value=false
divstyle="background-color:red;height:100px;width:140px"
hide(){
this.value=true
}
show(){
this.value=false
}
}