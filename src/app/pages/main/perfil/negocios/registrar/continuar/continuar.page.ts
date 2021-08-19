import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { formatDate } from '@angular/common';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-continuar',
  templateUrl: './continuar.page.html',
  styleUrls: ['./continuar.page.scss'],
})
export class ContinuarPage implements OnInit {

  public horario: string; 
  public abre: string[] = ['','','','','','',''];
  public cierra: string[] = ['','','','','','',''];
  public establecimientoForm: FormGroup;
  public redesForm: FormGroup;
  public establecimiento = false;
  public sociales= false;

  public tags: string[] = [];

  public timepickerAbierto: string;
  public timepickerCerrado: string;

  constructor(
    private navController: NavController, 
    private formBuilder:FormBuilder
    ) { this.formBuilderInit(); }

  ngOnInit() {
  }

  formBuilderInit = () => {

    this.establecimientoForm = this.formBuilder.group({
      calle: new FormControl('', Validators.compose([
        Validators.minLength(6),
        // Validators.maxLength(30)//,
       // Validators.pattern(passwordRegex)
      ])),
      exterior: new FormControl('', Validators.compose([
        Validators.minLength(6),
        Validators.maxLength(50)//,
        //Validators.pattern('^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$')
      ])),
      interior: new FormControl('', Validators.compose([
        Validators.minLength(6),
        Validators.maxLength(50)//,
        //Validators.pattern('^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$')
      ])),
      colonia: new FormControl('', Validators.compose([
        Validators.minLength(6),
        Validators.maxLength(50)//,
        //Validators.pattern('^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$')
      ])),
      cp: new FormControl('', Validators.compose([
        Validators.minLength(6),
        Validators.maxLength(50)//,
        //Validators.pattern('^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$')
      ])),
      municipio: new FormControl('', Validators.compose([
        Validators.minLength(6),
        Validators.maxLength(50)//,
        //Validators.pattern('^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$')
      ])),
      certificacion: new FormControl('', Validators.compose([
        Validators.minLength(6),
        Validators.maxLength(50)//,
        //Validators.pattern('^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$')
      ])),
    });

    this.redesForm = this.formBuilder.group({
      web: new FormControl('', Validators.compose([
        Validators.minLength(6),
        // Validators.maxLength(30)//,
       // Validators.pattern(passwordRegex)
      ])),
      facebook: new FormControl('', Validators.compose([
        Validators.minLength(6),
        Validators.maxLength(50)//,
        //Validators.pattern('^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$')
      ])),
      instagram: new FormControl('', Validators.compose([
        Validators.minLength(6),
        Validators.maxLength(50)//,
        //Validators.pattern('^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$')
      ])),
    });
  }


  volver(){
    this.navController.pop();
  }

  segmentChanged(ev: any) {
    //console.log(this.horario);
    //console.log('Segment changed', ev);
  }
  
  setAbierto(ev: any){
    if(this.timepickerAbierto != '') {
      let hora = formatDate(new Date(ev.detail.value),'HH:mm','en');
      this.abre[this.horario] = hora;
      this.timepickerAbierto = '';
    }
    
  }

  setCerrado(ev: any){
    if(this.timepickerCerrado != ''){
      let hora = formatDate(new Date(ev.detail.value),'HH:mm','en');
      this.cierra[this.horario] = hora;
      this.timepickerCerrado = '';
    }
  }

  publicar(){
    console.log('NOMBRE', localStorage.getItem('REG_NEGOCIO_NOMBRE'));
    console.log('CATEGORIA', localStorage.getItem('REG_NEGOCIO_CATEGORIA'));
    console.log('SUBCATEGORIA', localStorage.getItem('REG_NEGOCIO_SUBCATEGORIA'));
    console.log('DESCRIPCION', localStorage.getItem('REG_NEGOCIO_DESCRIPCION'));
    console.log('ETIQUETA', localStorage.getItem('REG_NEGOCIO_ETIQUETA'));
    console.log('TELEFONO', localStorage.getItem('REG_NEGOCIO_TELEFONO'));
    console.log('WHATSAPP', localStorage.getItem('REG_NEGOCIO_WHATSAPP'));
    console.log('EMAIL', localStorage.getItem('REG_NEGOCIO_EMAIL'));
    console.log('YOUTUBE', localStorage.getItem('REG_NEGOCIO_YOUTUBE'));
    // console.log('CAMPO', localStorage.getItem('REG_NEGOCIO_IMAGENES'));

    console.log('HORARIOS APERTURA',this.abre);
    console.log('HORARIOS CIERRE',this.cierra);
    console.log('CALLE',this.establecimientoForm.get('calle').value);
    console.log('EXTERIOR',this.establecimientoForm.get('exterior').value);
    console.log('INTERIOR',this.establecimientoForm.get('interior').value);
    console.log('COLONIA',this.establecimientoForm.get('colonia').value);
    console.log('CP',this.establecimientoForm.get('cp').value);
    console.log('MUNICIPIO',this.establecimientoForm.get('municipio').value);
    console.log('CERTIFICACION',this.establecimientoForm.get('certificacion').value);

    console.log('WEB',this.redesForm.get('web').value);
    console.log('FACEBOOK',this.redesForm.get('facebook').value);
    console.log('INSTAGRAM',this.redesForm.get('instagram').value);
    
  }



  onChange(val){
    console.log(val)
  }

  verifyTag(str: string): boolean{
    console.log(str)
    return str !== 'ABC' && str.trim() !== '';
  }

  updateList(ev){
    console.log(ev.target.value)
  }
}
