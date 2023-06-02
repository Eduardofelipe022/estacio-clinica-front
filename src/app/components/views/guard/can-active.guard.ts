import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioService } from '../usuario/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class CanActiveGuard implements CanActivate {

  constructor(
    private router: Router,
    private service: UsuarioService ) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  if (this.service.usuario != null){
    return true;
  }
    this.service.mensagem(
      'Sessão Expirada Favor realizar novo Login'
  );
    this.router.navigate(['/login']);
    return false;
  }
 }

