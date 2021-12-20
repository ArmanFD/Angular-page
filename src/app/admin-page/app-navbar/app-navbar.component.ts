import { Component, OnInit } from '@angular/core';
import { AfService } from 'src/app/providers/af.service';
import { User } from 'src/app/providers/user';

@Component({
  selector: 'app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.scss']
})
export class AppNavbarComponent implements OnInit {

user!: User
  constructor(public afService: AfService) { }

  ngOnInit() {
    this.afService.user$.subscribe(user => this.user = user)
  }
}
