import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.total=this.mark1+this.mark2+this.mark3
    this.avg=(this.total/3)
    if(this.avg>50){
      this.result="Pass"
      this.styles="background-color:green;"
    }
    else{
      this.result="Fail"
      this.styles="font-color:red;"

    }
  }

  @Input() name="" 
  @Input() img5="" 
  @Input() mark1=0
  @Input() mark2=0
  @Input() mark3=0
  total=0
  avg=0
  result=""
  styles=''
}
