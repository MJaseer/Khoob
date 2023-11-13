import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { HelperService } from '../helper/helper.service';

export const authGuard: CanActivateFn = (route, state) => {

  // const router = inject(Router)
  const authService = inject(HelperService)
  
  const token = authService.getToken()

  if (token) {
    return true
  } else {
    // router.navigate(['/login'])
    return false
  }
};
