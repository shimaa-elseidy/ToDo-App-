import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [RouterLink,HomeComponent],
  templateUrl: '../page-not-found/page-not-found.component.html',
  styleUrl: '../page-not-found/page-not-found.component.scss'
})
export class PageNotFoundComponent {
private readonly _Router=inject(Router)
goTosigninPage():void{
  this._Router.navigate(['/signin'])
}
}
