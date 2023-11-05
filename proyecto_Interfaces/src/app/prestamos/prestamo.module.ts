import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { navbarModule } from '../navbar/navbar.module';


import { footerModule } from '../footer/footer.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import gamesController from 'server/src/controllers/gamesController';
import { libroModel } from '../models/libros';
import { prestamocomponent } from './prestamo.component';






@NgModule({
  declarations: [
    prestamocomponent, 
   
       ],
  imports: [
    CommonModule,
    navbarModule,
    footerModule,
    FormsModule,
    ReactiveFormsModule
    
    
  ],
 providers: [libroModel]
})
export class prestamoModule { }
