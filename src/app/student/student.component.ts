import { Component, OnInit } from '@angular/core';
import{FormGroup,FormBuilder, } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent  implements OnInit{
studentForm!:FormGroup

constructor( private fb:FormBuilder, private route:Router, private activatedroute:ActivatedRoute , ){}

ngOnInit(){
  this.studentForm=this.fb.group({
    'rollno':[''],
    'sName':['']
  })
  

}
add(){
  
  this.route.navigate(['/student-details'])
}
}
