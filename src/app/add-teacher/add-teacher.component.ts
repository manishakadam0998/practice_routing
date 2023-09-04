import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CollegeServiceService } from '../college-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.css']
})
export class AddTeacherComponent implements OnInit {
  teacherForm!:FormGroup;
  constructor(private fb:FormBuilder ,private http:CollegeServiceService , private route:Router){}
  ngOnInit() {
    this.createform()
  }
  createform(){
this.teacherForm=this.fb.group({
  'class':[''],
  'tname':[''],
  'studv':['']
})
  }

  add2(){
    this.http.postDataFromServer('teacher',this.teacherForm.value).subscribe((response:any)=>{
      console.log(response)
      this.route.navigate(['/college'])
    })
  }
}
