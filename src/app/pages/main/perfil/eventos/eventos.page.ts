import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.page.html',
  styleUrls: ['./eventos.page.scss'],
})
export class EventosPage implements OnInit {

  public listaRegistrados: number[] = []; //variable de prueba
  public listaRevision: number[] = []; //variable de prueba
  public segment: string;

  constructor(private navController: NavController) { }

  ngOnInit() {
    this.segment = '1';
  }

  volver(){
    this.navController.navigateBack(['/main/perfil']);
  }

  publicar(){
    this.navController.navigateForward(['/main/perfil/eventos/publicar']);
  }

  segmentChanged(ev: any) {
    //console.log(this.segment);
    //console.log('Segment changed', ev);
  }

}
