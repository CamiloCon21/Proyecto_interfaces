import { NgModule } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { navbarRoutingModule } from './navbar-routingmodule';



@NgModule({
    imports: [
        CommonModule,
        ToastrModule,
        navbarRoutingModule
        
    ],
    declarations: [NavbarComponent],
    exports: [NavbarComponent]
})
export class navbarModule {

}