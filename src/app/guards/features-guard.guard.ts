import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class FeaturesGuardGuard implements CanActivate {
  constructor(private router:Router,private authService:AuthService){}
  // this canactivate prevents users from changing url path to see products without being authenticated
    canActivate() {
      const token=JSON.parse(localStorage.getItem("token")!)
        
      if(this.authService.checkToken()){
  
  
        return true;
  
      }
      else{
  
        this.router.navigate(['/'])
  
        return false
      }
  
    }
  
}
