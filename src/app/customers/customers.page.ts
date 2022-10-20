import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";

@Component({
  selector: 'app-customers',
  templateUrl: './customers.page.html',
  styleUrls: ['./customers.page.scss'],
})
export class CustomersPage implements OnInit {

  users: any = [];
  searchedUser: any;

  permission: boolean;
  constructor(
    private router: Router,
    private Http: HttpClient) { }

  ngOnInit() {
    this.permission = true;
    this.getUsers().subscribe(res => {
      console.log("Res", res);
      this.users = res;
      this.searchedUser = this.users;
    });
  }
  goToHome() {
    this.router.navigate(['/home'])
  }

  getUsers() {
    return this.Http
      .get("assets/files/customers.json")
      .pipe(
        map((res: any) => {
          return res.data;
        })
      )

  }
  searchCustomer(event) {
    const text = event.target.value;
    this.searchedUser = this.users;
    if (text && text.trim() != '') {
      this.searchedUser = this.searchedUser.filtler((user: any) => {
        return (user.name.toLowerCase().indexOf(text.toLoweCase()) > -1);
      })
    }
  }

}
