// @ts-ignore
import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
// @ts-ignore
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  redirect() {
    this.router.navigate(['/account']);
  }
}
