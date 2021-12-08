import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {
  links = [
    {
      name: 'Menus',
      link: "menus",
    },
    {
      name: 'Posts',
      link: "posts",
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
