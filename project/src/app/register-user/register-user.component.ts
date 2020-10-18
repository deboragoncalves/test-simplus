import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  constructor(private route: Router) { }

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
          alert("A senha deve ter, no minimo, 6 dígitos.")
        }
      } else {
        alert("Preencha o email corretamente.")
      }
    } else {
      alert("Preencha o nome corretamente.")
    }
    
      
    }

}
