import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project1';
  name='Akash';
  Age=123;
  a=10;
  b=5;
  c:number=0;
  ngoninit(){
  this.c=this.a+this.b
  }

}
