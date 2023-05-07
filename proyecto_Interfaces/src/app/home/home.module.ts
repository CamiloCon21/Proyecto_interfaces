import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';

import { navbarModule } from '../navbar/navbar.module';


import { footerModule } from '../footer/footer.module';
import { HomeRoutingModule } from './home-routingmodule';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { comicsModule } from '../comics/comics.module';






@NgModule({
  declarations: [
    HomeComponent, 
   
       ],
  imports: [
    CommonModule,
    navbarModule,
    footerModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    
    
  ],
 
})
export class HomeModule { }
