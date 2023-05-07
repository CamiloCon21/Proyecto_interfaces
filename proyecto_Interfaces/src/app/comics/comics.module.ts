import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { navbarModule } from '../navbar/navbar.module';


import { footerModule } from '../footer/footer.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { comicsComponent } from './comics.component';
import { Ng2SearchPipeModule} from 'ng2-search-filter';






@NgModule({
  declarations: [
    comicsComponent, 
   
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
export class comicsModule { }
