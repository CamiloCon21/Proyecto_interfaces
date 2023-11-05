

import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { comicsComponent } from '../comics/comics.component';
import { seriesComponent } from '../series/series.component';
import { libreriacomponent } from '../Libreria/libreria.component';






const routes: Routes = [
    {
        path: '',
        children: [
            { path: 'inicio', component: HomeComponent },
            { path: 'comics', component: comicsComponent },
            { path: 'series', component: seriesComponent },
            { path: 'libreria', component: libreriacomponent },


            { path: '**', redirectTo: 'inicio' },
           
            
        ],

     
        
    },
   
    
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }
