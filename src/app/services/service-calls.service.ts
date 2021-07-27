import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServiceCallsService {

  constructor(private http: HttpClient) { }
  /* ----------------    All service calls will be here      ---------------- */
  serviceUrl:string="";
  applicationUrl:string="";
  applicationsData: any;

  public getApplications():any{
    return this.http.get(this.serviceUrl).pipe(
      map((res:any)=>{
        this.applicationsData = res.json();
      },(err: any)=>{
        console.error(err);
      })
    );
  }

  public getApplication(id:number):any{
    return this.http.get(this.serviceUrl+"/"+id).pipe(
      map((res:any)=>{
        return res.json();
      },(err: any)=>{
        console.error(err);
      })
    );
  }

  public saveApplication(application:any){
      return this.http.post(this.applicationUrl,application).pipe(
        map((res:any)=>{
          return res.json();
        },(err: any)=>{
          console.error(err);
        })
      );
  }

}
