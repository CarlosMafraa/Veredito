import {ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot} from '@angular/router';
import {inject} from '@angular/core';

export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const isAuthenticated: boolean = !!localStorage.getItem('authToken');
  if (isAuthenticated) {
    return true;
  } else {
    const router: Router = inject(Router);
    router.navigate(['login']).then();
    return false;
  }
};
