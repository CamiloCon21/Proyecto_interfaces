
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent} from './Login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';







@NgModule({
  declarations: [
    LoginComponent, 
   
       ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    
  ],
 
})
export class LoginModule { }
