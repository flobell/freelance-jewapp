import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.page.html',
  styleUrls: ['./articulo.page.scss'],
})
export class ArticuloPage implements OnInit {

  constructor(private navController: NavController) { }

  ngOnInit() {
  }

  volver(){
    this.navController.navigateBack(['/main/inicio/mercado/categorias/subcategorias/seleccion']);
  }
}
