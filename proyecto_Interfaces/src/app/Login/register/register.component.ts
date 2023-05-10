import { Component, OnInit } from '@angular/core';

import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class registerComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log("A")
  }

  Registro(){
    this.router.navigate(["auth/login"]);
  }


}
