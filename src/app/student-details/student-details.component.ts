import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CollegeServiceService } from '../college-service.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit{
  StudentData:any[]=[
    
      ]
  constructor(private route:ActivatedRoute ,private http:CollegeServiceService) {}
  obj:any=new Student1()
ngOnInit() {
//   this.obj.rollno=this.route.snapshot.paramMap.get('rollno');
//   this.obj.studentname=this.route.snapshot.paramMap.get('sName');
// this.StudentData.push(this.obj)
this.getData()
}
 getData(){
this.http.getDataFromServer('students').subscribe((response:any)=>{
  console.log("response")
  this.StudentData=response
}, ()=>{})
 }

}
class Student1{
  rollno!:number;
  stuName!:string
}