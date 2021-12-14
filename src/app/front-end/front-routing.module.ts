import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontEndComponent } from './front-end.component';
import { PagesListComponent } from './pages-list/pages-list.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PagesComponent } from './pages/pages.component';

const routes: Routes = [
    {
        path: '',
        component: FrontEndComponent,
        children: [
            {
                path: '',
                component: HomePageComponent,
            },
            {
                path: 'article', 
                component: PagesListComponent,
            },
            {
                path: "pages/:url",
                component: PagesComponent,
            },
            {
                path: '**',
                redirectTo: 'home',
            },
        ],
    },
];

export const FrontRoutingModule = RouterModule.forChild(routes);
