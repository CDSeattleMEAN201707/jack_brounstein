import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"

import { User } from "./../user"
import { UserService } from "./../user.service"

@Component({
  selector: 'app-users-login',
  templateUrl: './users-login.component.html',
  styleUrls: ['./users-login.component.css']
})
export class UsersLoginComponent implements OnInit {
  new_user = new User

  constructor(private user_service: UserService, private router: Router) { }

  ngOnInit() {
  }

  login(){
    console.log(this.new_user)
    this.user_service.login(this.new_user)
      .then(() => {
        this.router.navigate(["/dashboard"])
      })
      .catch(err => console.log(err))

    this.new_user = new User
  }

}
