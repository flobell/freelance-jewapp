import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-seleccion',
  templateUrl: './seleccion.page.html',
  styleUrls: ['./seleccion.page.scss'],
})
export class SeleccionPage implements OnInit {

  constructor(private navController: NavController) { }

  ngOnInit() {
  }

  volver(){
    this.navController.navigateBack(['/main/inicio/mercado/categorias/subcategorias/']);
  }

  articulo(){
    this.navController.navigateForward(['/main/inicio/mercado/categorias/subcategorias/seleccion/articulo']);
  }

}
