import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {

  constructor(private route: Router, private toast: ToastrService) { }

  ngOnInit(): void {

    // Se já tiver feito login 

    if (localStorage.getItem('username')) {

      this.route.navigate(['players']);
    }
  }

  submit(username: string, password: string) {

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
      
    }

  }
