import { Component, Inject, inject } from '@angular/core';
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { NgClass } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [NavBarComponent,ReactiveFormsModule,NgClass],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss'
})
export class SigninComponent {
  private readonly _AuthService=inject(AuthService);
  private readonly _FormBuilder=inject(FormBuilder);
  private readonly _Router=inject(Router);

  successMsq:boolean=false;
  errorMsg:string='';
  

  signinForm:FormGroup = this._FormBuilder.group({
    email:   [null,[Validators.required,Validators.email]],
    password:[null,[Validators.required,Validators.pattern(/^\w{6,}$/)]],
  })



  signin():void
  {
  if(this.signinForm.valid)
  {
    this._AuthService.signin(this.signinForm.value).subscribe({
      next:(res)=>{
        // console.log(res.token);
        this.successMsq = true;
        localStorage.setItem('userToken',res.token);
        //savetoken
        setTimeout(() => {
          this._Router.navigate(['/home'])
        }, 2000);
        ;
      },
      error:(err)=>{
        this.errorMsg=err.error.msg
      }
    })
  }
  }
}
