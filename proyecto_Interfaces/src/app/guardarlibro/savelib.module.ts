import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { navbarModule } from '../navbar/navbar.module';


import { footerModule } from '../footer/footer.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Ng2SearchPipeModule} from 'ng2-search-filter';
import { savelibcomponent } from './savelib.component';






@NgModule({
  declarations: [
    savelibcomponent, 
   
       ],
  imports: [
    CommonModule,
    navbarModule,
    footerModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule
    
    
  ],
 
})
export class savelibModule { }
