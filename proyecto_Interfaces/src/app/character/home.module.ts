import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';

import { navbarModule } from '../navbar/navbar.module';


import { footerModule } from '../footer/footer.module';
import { HomeRoutingModule } from './home-routingmodule';






@NgModule({
  declarations: [
    HomeComponent, 
   
       ],
  imports: [
    CommonModule,
    navbarModule,
    footerModule,
    HomeRoutingModule
    
  ],
 
})
export class HomeModule { }
