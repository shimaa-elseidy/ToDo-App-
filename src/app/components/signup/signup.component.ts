import { Component, inject } from '@angular/core';
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { NgClass } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule,NavBarComponent,NgClass],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
private readonly _FormBuilder=inject(FormBuilder);
private readonly _AuthService=inject(AuthService);
private readonly _Router=inject(Router);

errorMsg:string='';
successMsg:string=''

registerForm:FormGroup = this._FormBuilder.group({
  name:    [null,[Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
  email:   [null,[Validators.required,Validators.email]],
  password:[null,[Validators.required,Validators.pattern(/^\w{6,}$/)]],
  age:     [null,[Validators.required,Validators.min(20)]],
  phone:   [null,[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)]],
})

register():void
{
  if(this.registerForm.valid)
  {
    this._AuthService.registerForm(this.registerForm.value).subscribe({
      next:(res)=>{console.log(res);
        this.successMsg=res.msq
        setTimeout(() => {
          this._Router.navigate(['/signin'])
        }, 1000);
      },
      error:(err)=>
      {
        this.errorMsg=err.error.msg
      }
    })
  }
}
}
