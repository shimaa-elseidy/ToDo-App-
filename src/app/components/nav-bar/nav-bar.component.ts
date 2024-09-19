import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
private readonly _Router =inject(Router);
goHome():void
{
  this._Router.navigate(['/home'])
}
signOut():void
{ 
  localStorage.removeItem('userToken')
  this._Router.navigate(['/signin'])
}
}
