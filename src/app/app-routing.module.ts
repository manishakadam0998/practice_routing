import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';
import { CollegeComponent } from './college/college.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { AddTeacherComponent } from './add-teacher/add-teacher.component';

const routes: Routes = [
  { path:'',redirectTo:"/college",pathMatch:'full'},
  {path:'student',component:StudentComponent},
  {path:"teacher",component:TeacherComponent},
  {path:'college',component:CollegeComponent},
  {path:'student-details', component:StudentDetailsComponent},
  {path:'add-student' , component:AddStudentComponent},
  {path:'add-teacher' ,component:AddTeacherComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
