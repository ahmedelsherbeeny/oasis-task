import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  logInForm!:FormGroup

  constructor(private fb:FormBuilder,private authService:AuthService,private router:Router){

  }


  ngOnInit(): void {
    this.logInForm = this.fb.group({
      username:[null, Validators.required] ,
      password:[null, Validators.required] 
    })
  }



  signIn() {

    let formData = this.logInForm.value;
    let data = {
      username: formData.username,
      password: formData.password
    }
    this.authService.logIn(data).subscribe((response: any) => {

      localStorage.setItem("token",JSON.stringify(response.token))

      // here user is authenticated and can redirect to home page

      this.router.navigate(['/home']);

    })
    
  }

}
