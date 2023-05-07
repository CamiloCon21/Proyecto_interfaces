

import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { comicsComponent } from '../comics/comics.component';
import { HomeComponent } from '../home/home.component';






const routes: Routes = [
    {
        path: '',
        children: [
            { path: 'inicio', component: HomeComponent },
            { path: 'comics', component: comicsComponent },
            { path: '**', redirectTo: 'inicio' },
           
            
        ],

     
        
    },
   
    
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class navbarRoutingModule { }
