import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ApiService } from '../../services/api.service';
import { Storage } from '@ionic/storage';
import { TOKEN_KEY } from '../../services/constants';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public loginForm: FormGroup;
  private email: string;
  private password: string;

  //Constructor de la clase
  constructor(
    private navController: NavController,  
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private storage: Storage
  ){
    this.formBuilderInit();
  }

  //Constructor de la vista
  ngOnInit() {
      
  }

  //Funcion constructora para el formulario
  formBuilderInit = () => {
    this.loginForm = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(50)//,
        //Validators.pattern('^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30)//,
       // Validators.pattern(passwordRegex)
      ]))
    });
  }

  attemptLogin(){
    this.apiService.login(this.loginForm.get('email').value,this.loginForm.get('password').value).subscribe(
      (response) => {
        if (response.access_token) {
          this.authService.login(response.access_token);
        } else {
          console.log('Contraseña Incorrecta.');
        }
      },
      (error: any) => { console.log('Error de conexion.',error); }
    );
    
  }

  registrar(){
    this.navController.navigateForward(['/register']);
  }
}
