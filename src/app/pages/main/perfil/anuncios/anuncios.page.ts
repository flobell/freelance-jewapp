import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-anuncios',
  templateUrl: './anuncios.page.html',
  styleUrls: ['./anuncios.page.scss'],
})
export class AnunciosPage implements OnInit {

  public listaPublicados: number[] = [ ]; //variable de prueba
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
    this.navController.navigateForward(['/main/perfil/anuncios/publicar']);
  }

  segmentChanged(ev: any) {
    //console.log(this.segment);
    //console.log('Segment changed', ev);
  }
}
