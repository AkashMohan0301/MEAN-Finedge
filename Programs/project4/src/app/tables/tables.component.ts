import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
datas=[
  {Fruit_name:"Apple",Price:120,Qty:400},
  {Fruit_name:"Banana",Price:50,Qty:200},
  {Fruit_name:"Mango",Price:150,Qty:300},
  {Fruit_name:"Orange",Price:100,Qty:500},
  {Fruit_name:"Grapes",Price:80,Qty:600}
]

}
