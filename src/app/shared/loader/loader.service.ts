import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private isLoading:BehaviorSubject<boolean>=new BehaviorSubject<boolean>(false);
  public readonly loading$=this.isLoading.asObservable()

  constructor() {
    
   }
   // show the loader when we hit the endpoint
  show(){
    this.isLoading.next(true)
  }
  // loader is being hidden after period of time
  hide(){
    this.isLoading.next(false)
  }}
