import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { HelperService } from '../helper/helper.service';

export const adminAuthGuard: CanActivateFn = (route, state) => {
  
  const authService = inject(HelperService)
  
  const token = authService.getToken()

  if (token) {
    return true
  } else {
    return false
  }
};
