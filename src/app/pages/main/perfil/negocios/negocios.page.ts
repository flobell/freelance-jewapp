import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-negocios',
  templateUrl: './negocios.page.html',
  styleUrls: ['./negocios.page.scss'],
})

export class NegociosPage implements OnInit {

  public listaRegistrados: number[] = []; //variable de prueba
  public listaRevision: number[] = []; //variable de prueba
  public segment: string;

  constructor(
    private navController: NavController,
    private apiService: ApiService
  ) { 

  }

  ngOnInit() {
    this.segment = '1';
    //console.log("ngOnInit: "+this.segment);
  }

  volver(){
    this.navController.navigateBack('/main/perfil');
  }

  registrar(){
    this.navController.navigateForward(['/main/perfil/negocios/registrar']);
  }

  segmentChanged(ev: any) {
    //console.log(this.segment);
    //console.log('Segment changed', ev);
  }

}
