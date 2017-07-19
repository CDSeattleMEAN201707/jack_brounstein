import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"

import { User } from "./../user"
import { UserService } from "./../user.service"

@Component({
  selector: 'app-users-dashboard',
  templateUrl: './users-dashboard.component.html',
  styleUrls: ['./users-dashboard.component.css']
})
export class UsersDashboardComponent implements OnInit {
  user_list: Array<User>
  current_user: User

  constructor(private user_service: UserService, private router: Router) { }

  ngOnInit() {
    this.user_service.get_all_users()
      .then(data => this.user_list = data)
      .catch(err => console.log(err))

    this.user_service.get_logged_in_user()
      .then(data => {
        if(data){
          this.current_user = data
        } else {
          this.router.navigate(["/login"])
        }
      })
      .catch(err => console.log(err))
  }

}
