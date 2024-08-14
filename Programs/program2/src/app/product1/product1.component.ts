import { Component, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-product1',
  templateUrl: './product1.component.html',
  styleUrls: ['./product1.component.css']
})
export class Product1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {

    

  }
// input decoration
  @Input() title="" 
  @Input() img=""
  @Input() description=""

}
