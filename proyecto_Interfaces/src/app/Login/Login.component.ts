import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Router, RouterLink } from '@angular/router';
import { UserModel } from '../models/UserModel';
import { UserService } from '../services/loginservice';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.css']
})
export class LoginComponent implements OnInit { form: FormGroup;
  listUsers: UserModel[];
  user: UserModel;
  validarUsuario: boolean;
  constructor(private formBuilder: FormBuilder, private router: Router, private userService: UserService, private http: HttpClient) {
    this.form = this.formBuilder.group({ // se crea el formulario con los parametros usuario y contraseña con la condicion de que siempre tienen que llenar estos campos

      usuario: ['', [Validators.required]],
      contraseña: ['', [Validators.required]],


    })
  }
  ngOnInit(): void {


  }

  ingresoUsuario() {
    
    const usuario = this.form.get('usuario')?.value;
    const contraseña = this.form.get('contraseña')?.value;
    this.userService.traerUsuarios().subscribe(data => {// Se suscribe a un servicio mediante un metodo el cual trae los usuarios de la base de datos
      this.listUsers = data as UserModel[];
      
      for (let element of this.listUsers) { 
        if (element.login == usuario && element.password == contraseña) { //compara los datos que trajo anteriormente y si coincide ingresa a la pagia principal
          this.user = element; //asigno el usuario encontrado a una variable user
          this.validarUsuario = true; // asignamos true para que al momento de ingresar no nos salte un error
          this.userService.setToken(this.user.id_user!.toString());  //mando el id usuario como token
          this.router.navigate(['/home']);

          console.log("El usuario existe"+"El id usuario es: "+element.id_user)
                  
        
        }else{
          this.validarUsuario= false // como no se encontro nigun usuario la variable queda en false
          
        }
             
      
        }

       

    });
    
  }

  registrarUsuario(){
    this.router.navigate(['/home']);

  }


  
}
