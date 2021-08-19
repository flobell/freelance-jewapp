import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { ApiService } from 'src/app/services/api.service';
import { ImageService } from 'src/app/services/image.service';
import { Pregunta } from '../../../models/pregunta.interface';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-register2',
  templateUrl: './register2.page.html',
  styleUrls: ['./register2.page.scss'],
})
export class Register2Page implements OnInit {

  public preguntas: Observable<Pregunta[]>;
  public preguntasForm: FormGroup;
  private dataForm: any = {}
  private imagepromise: Promise<any>;


  private preguntasAux: Pregunta[];

  constructor(
    private navController: NavController,
    private storage: Storage,
    private apiService: ApiService,
    public formBuilder:FormBuilder,
    private imgToBlob: ImageService
  ) { 
    this.formBuilderInit();
    this.preguntas = this.apiService.getRegisterQuestions();

    this.storage.get('REGISTER_DATA').then((data) => {
      this.dataForm.name = data.name;
      this.dataForm.lastname = data.lastname;
      this.dataForm.community = data.community;
      this.dataForm.email = data.email;
      this.dataForm.password = data.password;
      this.imagepromise = data.imagepromise;
    });
  }

  ngOnInit() {
  }

  formBuilderInit = () => {
    this.preguntasForm = this.formBuilder.group({
      respuesta0: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(50)
      ])),
      respuesta1: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(50)
      ])),
      respuesta2: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(50)
      ]))
    });
  }

  //SIN FOTO
  registrar(){
    this.dataForm.answer0 = this.preguntasForm.get('respuesta0').value
    this.dataForm.answer1 = this.preguntasForm.get('respuesta1').value
    this.dataForm.answer2 = this.preguntasForm.get('respuesta2').value


    this.preguntas.subscribe(
      (response) => {
        this.dataForm.question0 = response[0].id;
        this.dataForm.question1 = response[1].id;
        this.dataForm.question2 = response[2].id;

        this.apiService.registerUser(this.dataForm).subscribe(
          (response) => { 
            console.log('[Register] Success', response); 
            this.navController.navigateForward(['/register/register2/register3']); 
          },
          (error) => { 
            console.log('[Register] Error', error); 
            this.navController.navigateForward(['/register/register2/register3']); 
          },
          () => {
            
          }
        )
      }
    );

  }

  // //PARA CARGA CON FOTO
  // registrar(){
  //   this.dataForm.answer0 = this.preguntasForm.get('respuesta0').value
  //   this.dataForm.answer1 = this.preguntasForm.get('respuesta1').value
  //   this.dataForm.answer2 = this.preguntasForm.get('respuesta2').value

  //   let image: string;
  //   this.imagepromise.then(
  //     (results) => {

  //       image = results[0];
  //       var blob = this.imgToBlob.b64toBlob(image, {type: 'image/jpg'},null)
  //       this.dataForm.imagenurl = blob;

  //       this.preguntas.subscribe(
  //         (response) => {
  //           this.dataForm.question0 = response[0].id;
  //           this.dataForm.question1 = response[1].id;
  //           this.dataForm.question2 = response[2].id;
    
  //           this.apiService.registerUser(this.dataForm).subscribe(
  //             (response) => { 
  //               console.log('SUCCESS', response); 
  //               this.navController.navigateForward(['/register/register2/register3']); 
  //             },
  //             (error) => { 
  //               console.log('ERROR', error); 
  //               this.navController.navigateForward(['/register/register2/register3']); 
  //             },
  //             () => {
  //               // this.navController.navigateForward(['/register/register2/register3']); 
  //             }
  //           )
  //         }
  //       );

  //       // let formData:FormData = new FormData();
  //       // formData.append('name',			"hola");
  //       // formData.append('lastname',	"pokemon");
  //       // formData.append('community',		"localidad");      	
  //       // formData.append('password',			"12312313");
  //       // formData.append('email',			"poke@gmail.com");
  //       // formData.append('imagenurl',		blob);
    
  //   }, 
  //     (err) => { }
  //   );

  // }

}
