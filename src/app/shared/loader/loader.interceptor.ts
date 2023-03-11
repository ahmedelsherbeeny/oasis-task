import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { finalize, Observable } from 'rxjs';
import { LoaderService } from './loader.service';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

  constructor(public loader:LoaderService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    setTimeout(() => {
      this.loader.show();

      
    }, 750);


    return next.handle(request).pipe(
      finalize(()=>{
        setTimeout(() => {
          this.loader.hide()
        }, 1500);

      })
    )  }
}
