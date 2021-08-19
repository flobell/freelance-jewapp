import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {

  public listaPublicados: number[] = [1]; //variable de prueba
  public listaRevision: number[] = []; //variable de prueba
  public segment: string;

  constructor(private navController: NavController) { }

  ngOnInit() {
    this.segment = '1';
  }

  volver(){
    this.navController.navigateBack('/main/perfil');
  }

  publicar(){
    this.navController.navigateForward(['/main/perfil/productos/publicar']);
  }

  segmentChanged(ev: any) {
    //console.log(this.segment);
    //console.log('Segment changed', ev);
  }

}
