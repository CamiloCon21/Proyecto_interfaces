

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule  } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Ng2SearchPipeModule} from 'ng2-search-filter';
import { HomeModule } from './home/home.module';
import { navbarModule } from './navbar/navbar.module';
import { seriesModule } from './series/series.module';
import { characterModule } from './character/character.module';
import { LoginModule } from './Login/Login.module';
import { LibreriaModule } from './Libreria/libreria.module';
import { savelibModule } from './guardarlibro/savelib.module';
import { prestamoModule } from './prestamos/prestamo.module';
import { sollibModule } from './solicitar_libro/sollib.module';



//import { HighlightService } from '../app/HighlighService/HighlightService';

@NgModule({
  declarations: [
    AppComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,    
    ReactiveFormsModule,
    FormsModule,
    HomeModule,
    navbarModule,
    Ng2SearchPipeModule,
    seriesModule,
    LoginModule,
    LibreriaModule,
    savelibModule,
    prestamoModule,
    sollibModule,
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
