import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {

  constructor(private route: Router) { }

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
        alert("A senha deve ter, no minimo, 6 dígitos.")
      }
    } else {
      alert("Preencha o email corretamente.")
    }
      
    }

  }
