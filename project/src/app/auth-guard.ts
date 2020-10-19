import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';

@Injectable({
    providedIn: 'root' 
})

export class AuthGuard implements CanActivate {
    constructor(private toast: ToastrService, private route: Router) {};

    // Método que retorna true se usuário tiver logado e impede o acesso à página

    canActivate() {
        if (localStorage.getItem('username')) {
            return true;
        } else {
            this.toast.warning('Você deve fazer login para ter acesso à página.', 'Acesso negado', {
                timeOut: 5000
            });

            this.route.navigate[('login-user')]

            return false;
        }
    }
}
