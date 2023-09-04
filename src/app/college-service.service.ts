import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CollegeServiceService {

  baseUrl:string="http://localhost:3000/";
  httpheader:HttpHeaders=new HttpHeaders;
  constructor( private http:HttpClient) { }

  getDataFromServer(endPoint:string){
    const url=this.baseUrl+ endPoint;
    return this.http.get(url)
  }
  postDataFromServer( endPoint:string , body:any){
    const url=this.baseUrl+endPoint;
    return this.http.post(url, body)
  }
  putDataFromServer(endPoint:string , body:any){
    const url=this.baseUrl+endPoint;
    return this.http.put(url ,body )
  }
  deleteDataFromServer(endPoint:string){
    const url= this.baseUrl+endPoint;
    return this.http.delete(url)
  }
}
