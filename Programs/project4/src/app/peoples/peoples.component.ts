import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-peoples',
  templateUrl: './peoples.component.html',
  styleUrls: ['./peoples.component.css']
})
export class PeoplesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
peoples =[
  {Name:"Jack",Age:30,country:"Canada"},
  {Name:"John",Age:25,country:"USA"},
  {Name:"Alex",Age:35,country:"UK"},
  {Name:"Sam",Age:20,country:"Australia"},
  {Name:"Mike",Age:40,country:"Canada"},
  {Name:"Tom",Age:28,country:"USA"},
  {Name:"Ben",Age:32,country:"UK"},
  {Name:"Lily",Age:22,country:"Australia"},
  {Name:"Emma",Age:38,country:"Canada"},
  
]
}
