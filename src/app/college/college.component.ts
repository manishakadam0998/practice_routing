import { Component, OnInit } from '@angular/core';
import { CollegeServiceService } from '../college-service.service';

@Component({
  selector: 'app-college',
  templateUrl: './college.component.html',
  styleUrls: ['./college.component.css']
})
export class CollegeComponent implements OnInit {
 constructor( private http:CollegeServiceService ){}
  collegeData!:any;
 ngOnInit() {
  this.http.getDataFromServer('teacher').subscribe((response:any)=>{
    console.log(response)
    this.collegeData=response
  })
   }
 update(){

 }
}
