

import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { comicsComponent } from '../comics/comics.component';
import { HomeComponent } from '../home/home.component';
import { seriesComponent } from '../series/series.component';
import { characterComponent } from '../character/character.component';
import { LoginComponent } from '../Login/Login.component';
import { registerComponent } from '../Login/register/register.component';
import { libreriacomponent } from '../Libreria/libreria.component';
import { savelibcomponent } from '../guardarlibro/savelib.component';
import { prestamocomponent } from '../prestamos/prestamo.component';
import { sollibcomponent } from '../solicitar_libro/sollib.component';






const routes: Routes = [
    {
        path: '',
        children: [
            { path: 'inicio', component: HomeComponent },
            { path: 'comics', component: comicsComponent },
            { path: 'series', component: seriesComponent },
            { path: 'characters', component: characterComponent },
            { path: 'login', component: LoginComponent },
            { path: 'register', component: registerComponent },
            { path: 'libreria', component: libreriacomponent },
            { path: 'savelib', component: savelibcomponent },
            { path: 'prestamo', component: prestamocomponent },
            { path: 'sollib', component: sollibcomponent },


            { path: '**', redirectTo: 'inicio' },
           
            
        ],

     
        
    },
   
    
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class navbarRoutingModule { }
