import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/services/auth.service';
import { SharedService } from '../shared/servies/shared.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor(private sharedService:SharedService){

  }
  canActivate() {

    if(this.sharedService.checkToken()){
      return false;
    }
    return true;
      
   
  
  }
  
  
}
