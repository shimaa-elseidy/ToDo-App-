import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const blankgaurdGuard: CanActivateFn = (route, state) => {
  let _router = inject(Router)
if (typeof localStorage !== 'undefined')
{
  if(!localStorage.getItem('userToken'))
    {
      return true
    }
  else
  {
    _router.navigate(['/home'])
    return false
  }
}
else
{
  return false;
}
};
