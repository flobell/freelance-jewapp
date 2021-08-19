import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { Observable } from 'rxjs';
import { Category } from 'src/app/models/category.interface';
import { Subcategory } from 'src/app/models/subcategory.interface';
import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker/ngx';
import { ImageService } from 'src/app/services/image.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage implements OnInit {

    //Para hacer funcionar los tags
    tags = ['Ionic', 'Angular', 'TypeScript'];

    topics = [];
    name: string;
    talks = [];
    preparedTags = [
      '#Ionic',
      '#Angular',
      '#Javascript',
      '#Mobile',
      '#Hybrid',
      '#CrossPlatform'
    ]

  public formulario: FormGroup;

  public categorias: Observable<Category[]>;
  public subcategorias: Observable<Subcategory[]>;

  public subcategoriasNgModel: string;

  public imagenes: string[];

  constructor(
    private navController: NavController, 
    private router: Router,
    private apiService: ApiService,
    private imagePicker: ImagePicker,
    private imageService: ImageService,
    private formBuilder:FormBuilder
    ) { this.formBuilderInit() }

  ngOnInit() {
    this.categorias = this.apiService.getBusinessCategories();
  }

  formBuilderInit = () => {
    this.formulario = this.formBuilder.group({
      nombre: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30)//,
       // Validators.pattern(passwordRegex)
      ])),
      categoria: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(50)//,
        //Validators.pattern('^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$')
      ])),
      subcategoria: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(50)//,
        //Validators.pattern('^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$')
      ])),
      descripcion: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(50)//,
        //Validators.pattern('^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$')
      ])),
      etiqueta: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(50)//,
        //Validators.pattern('^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$')
      ])),
      telefono: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(50)//,
        //Validators.pattern('^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$')
      ])),
      whatsapp: new FormControl('', Validators.compose([
        // Validators.required,
        Validators.minLength(6),
        Validators.maxLength(50)//,
        //Validators.pattern('^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$')
      ])),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(50)//,
        //Validators.pattern('^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$')
      ])),
      youtube: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(50)//,
        //Validators.pattern('^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$')
      ])),
    });
  }

  volver(){
    this.navController.pop();
  }

  setSubcategorias(ev: any){
    // console.log(ev.detail.value);
    this.subcategoriasNgModel = null;
    this.subcategorias = this.apiService.getBusinessSubcategories(ev.detail.value);
  }

  getImagen(ev: any){
    console.log('FILE INPUT', ev);
    let file: File;
    file = ev.target.files[0];
    console.log(file);
  }

  seleccionarImagenes(){
    let options:ImagePickerOptions = {
      maximumImagesCount:8,
      outputType:1,
      width: 100,
      height: 100,
      quality : 75
    }
    
    this.imagePicker.getPictures(options).then(
      (results) => {
        for (var i = 0; i < results.length; i++) {
          console.log('Image URI['+i+']:', results[i]);
          this.imagenes[i] = results[i];
          // var blob = this.imageService.getBlob(results[i], 'image/jpg', null);
          // console.log('Image BLOB['+i+']:', blob);
          // this.imagenes[i] = blob;
        }
    },
      (error) => { }
    );
  }

  continuar(){
    localStorage.setItem('REG_NEGOCIO_NOMBRE', this.formulario.get('nombre').value) 
    localStorage.setItem('REG_NEGOCIO_CATEGORIA', this.formulario.get('categoria').value) 
    localStorage.setItem('REG_NEGOCIO_SUBCATEGORIA', this.formulario.get('subcategoria').value) 
    localStorage.setItem('REG_NEGOCIO_DESCRIPCION', this.formulario.get('descripcion').value) 
    localStorage.setItem('REG_NEGOCIO_ETIQUETA', this.formulario.get('etiqueta').value) 
    localStorage.setItem('REG_NEGOCIO_TELEFONO', this.formulario.get('telefono').value) 
    localStorage.setItem('REG_NEGOCIO_WHATSAPP', this.formulario.get('whatsapp').value) 
    localStorage.setItem('REG_NEGOCIO_EMAIL', this.formulario.get('email').value) 
    localStorage.setItem('REG_NEGOCIO_YOUTUBE', this.formulario.get('youtube').value)
    // localStorage.setItem('REG_NEGOCIO_IMAGENES',this.imagenes[0])

    // console.log('CAMPO', localStorage.getItem('REG_NEGOCIO_NOMBRE'));
    // console.log('CAMPO', localStorage.getItem('REG_NEGOCIO_CATEGORIA'));
    // console.log('CAMPO', localStorage.getItem('REG_NEGOCIO_SUBCATEGORIA'));
    // console.log('CAMPO', localStorage.getItem('REG_NEGOCIO_DESCRIPCION'));
    // console.log('CAMPO', localStorage.getItem('REG_NEGOCIO_ETIQUETA'));
    // console.log('CAMPO', localStorage.getItem('REG_NEGOCIO_TELEFONO'));
    // console.log('CAMPO', localStorage.getItem('REG_NEGOCIO_WHATSAPP'));
    // console.log('CAMPO', localStorage.getItem('REG_NEGOCIO_EMAIL'));
    // console.log('CAMPO', localStorage.getItem('REG_NEGOCIO_YOUTUBE'));
    // // console.log('CAMPO', localStorage.getItem('REG_NEGOCIO_IMAGENES'));

    console.log('IMAGENES', this.imagenes);
    this.navController.navigateForward([this.router.url+'/continuar']);
  }
}
