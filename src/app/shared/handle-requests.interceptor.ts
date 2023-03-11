import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { SharedService } from './servies/shared.service';
import { Router } from '@angular/router';

@Injectable()
export class HandleRequestsInterceptor implements HttpInterceptor {
  responseMessage:any
  constructor(private sharedService:SharedService,private router:Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.sharedService.getToken()

    if (token) {
      request = request.clone({  headers: request.headers.set('Authorization', `Bearer ${token}`)  })

    }

    return next.handle(request).pipe(
      catchError((err)=>{
        if(err instanceof HttpErrorResponse){
          if(err.status == 400  ){
            alert(err.error.message)

            
            this.router.navigate(['/'])


           
          }else if(err.status ==404){
            alert(' not found')
          }
          else if(err.status ==413){
            alert(err.error.message)
          }
        }
        return throwError(err)
      })
    )

   
    
    
      }
}
