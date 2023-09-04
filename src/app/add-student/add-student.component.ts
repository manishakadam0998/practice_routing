import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CollegeServiceService } from '../college-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit{
  studentForm!:FormGroup

  constructor( private fb:FormBuilder,private http:CollegeServiceService, private route:Router){}
  ngOnInit(
  ) {
       this.createStructure()
  }
  createStructure(){
    this.studentForm=this.fb.group({
      'sName':[''],
      'rollno':['']
    })
  }

  add(){
    this.http.postDataFromServer('students',this.studentForm.value).subscribe((Response:any)=>{
      console.log(Response)
    });
    alert("data saved sucessfully")
    this.route.navigate(['/student-details'])
  }
}
