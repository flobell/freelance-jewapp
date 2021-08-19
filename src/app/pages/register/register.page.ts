import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api.service';
import { Community } from '../../models/community.interface';
import { Pregunta } from '../../models/pregunta.interface';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker/ngx';
import { ImageService } from '../../services/image.service'


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  public comunidades: Observable<Community[]>;
  public registerForm: FormGroup;
  private imagepromise: Promise<any>;


  constructor(
    private navController: NavController, 
    private apiService: ApiService,
    private formBuilder: FormBuilder,
    private storage: Storage,
    private imagePicker: ImagePicker
  ) { 
    this.formBuilderInit(); 
    this.comunidades = this.apiService.getAllCommunities();
  }

  ngOnInit() {
    //console.log(this.categorias);
  }

  //Funcion constructora para el formulario
  formBuilderInit = () => {
    this.registerForm = this.formBuilder.group({
      name: new FormControl('', Validators.compose([
        Validators.required,
        Validators.maxLength(20)
      ])),
      lastname: new FormControl('', Validators.compose([
        Validators.required,
        Validators.maxLength(20)
      ])),
      community: new FormControl('', Validators.compose([
        Validators.required,
        Validators.maxLength(20)
      ])),
      email: new FormControl('', Validators.compose([
       Validators.required,
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.maxLength(20)
      ])),
      confirm: new FormControl('', Validators.compose([
        Validators.required,
        Validators.maxLength(20)
      ])),
      // imagenurl: new FormControl('', Validators.compose([
      //   // Validators.required,
      //   // Validators.maxLength(20)
      // ])),
    });
  }

  changeListener($event) : void {
    console.log('FOTO',$event.target.files[0]);
    // this.imageBlob = this.imageBlobService.b64toBlob($event.target.files[0], {type: 'image/jpg'},null)
    // console.log('FOTO BLOB', this.imageBlob);
  }

  cargarImagen(){
    console.log('cargarImagen()');
    let options:ImagePickerOptions={
      maximumImagesCount:1,
      outputType:1,
      width: 100,
      height: 100,
      quality : 75
    }
    //let image:string
    this.imagepromise = this.imagePicker.getPictures(options);
  }

  async continuar(){
    let data: any = {}
    
    data.name = this.registerForm.get('name').value;
    data.lastname = this.registerForm.get('lastname').value;
    data.community = this.registerForm.get('community').value;
    data.email = this.registerForm.get('email').value;
    data.password = this.registerForm.get('password').value;
    data.imagepromise = this.imagepromise;


    await this.storage.set('REGISTER_DATA', data);
    await this.navController.navigateForward(['/register/register2']);
  }

}
