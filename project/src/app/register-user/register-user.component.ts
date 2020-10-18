import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  constructor(private route: Router, private toast: ToastrService) { }

  ngOnInit(): void {

    // Se já tiver login

    if (localStorage.getItem('username')) {
      this.route.navigate[('players')]
    }
  }

   submit(name: string, username: string, password: string) {

    if (name) {

      if (username.includes("@") && username.includes(".com")) {
        if (password.length > 7) {
  
          localStorage.setItem('username', username)
  
          this.route.navigate(['players']);
  
        } else {
          this.toast.warning('A senha deve ter, no minimo, 6 dígitos', 'Senha', {
            timeOut: 5000,
          });
        }
      } else {
        this.toast.warning('O email deve estar nesse formato: exemplo@exemplo.com', 'Email', {
          timeOut: 5000,
        });
      }
    } else {
      this.toast.warning('O campo Nome está vazio', 'Nome', {
        timeOut: 5000,
      });
    }
    
      
    }

}
