import { CanActivateFn } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

export const isLogoutGuard: CanActivateFn = (route, state) => {
  const token:string=localStorage.getItem('token')||'';
  if(!token) return true;

  const decode:any=jwtDecode(token)
     if(decode.exp*1000<Date.now()) {
        localStorage.removeItem('token')
      return true;}

  window.history.back()
  return false;
};
