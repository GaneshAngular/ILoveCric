import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

export const isLoggedGuard: CanActivateFn = (route, state) => {
  const token:string=localStorage.getItem('token')||'';
  const router=inject(Router)
   if(!token) {
       router.navigate(['/signin'])
    return false};

   const decode:any=jwtDecode(token)
      if(decode.exp*1000<Date.now()){
       router.navigate(['/signin'])
         return false};

   return true;
};
