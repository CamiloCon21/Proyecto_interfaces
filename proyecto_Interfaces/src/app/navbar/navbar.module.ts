import { NavbarComponent } from './navbar.component';
import { navbarRoutingModule } from './navbar-routingmodule';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';




@NgModule({
    imports: [
        CommonModule,
        navbarRoutingModule
        
    ],
    declarations: [NavbarComponent],
    exports: [NavbarComponent]
})
export class navbarModule {

}