import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.css']
})
export class LoginComponent implements OnInit {
   
 public Usuario: string;
 form: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({ 

      usuario: ['', [Validators.required]],
      contraseña: ['', [Validators.required]],


    })
  }
   

  ngOnInit(): void {

  }

  ingresar(){
    
 
    const usuario = this.form.get('usuario')?.value;
    sessionStorage.setItem('UsuarioLogin', usuario);
    this.router.navigate(["auth/home"]);
  }

}
