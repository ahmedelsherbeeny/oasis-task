import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/services/auth.service';
import { SharedService } from '../shared/servies/shared.service';

@Injectable({
  providedIn: 'root'
})
export class FeaturesGuardGuard implements CanActivate {
  constructor(private router:Router,private sharedService:SharedService){}
  // this canactivate prevents users from changing url path to see products without being authenticated
    canActivate() {
        
      if(this.sharedService.checkToken()){
  
  
        return true;
  
      }
      else{
  
        this.router.navigate(['/'])
  
        return false
      }
  
    }
  
}
