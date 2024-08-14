import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-valiation',
  templateUrl: './valiation.component.html',
  styleUrls: ['./valiation.component.css']
})
export class ValiationComponent implements OnInit {

  constructor(private fb:FormBuilder) { 
  
  }

regform = this.fb.group({

first_name:['',Validators.required],
last_name:['',Validators.required],
email:['',[Validators.required,Validators.email]],
phone:['',[Validators.required,Validators.pattern('[7-9{1}[0-9]{10}')]],
passwords:['',[Validators.required,Validators.pattern('^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}')]],

})
submit=false
pstyle=""
values={
  First_name:"",
  Last_name:"",
  email:"",
  phone:"",
  password:"",
}
  ngOnInit(): void {
  }
  OnSubmit(){
this.submit=true
console.log('f',this.f)

alert("First Name :"+this.values.First_name+"\n"+"Last Name :"+this.values.Last_name+"\n"+this.values.phone )
  }
  // convenience funtion
  get f(){
 return this.regform.controls
  }
}
