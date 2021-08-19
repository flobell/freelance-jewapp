import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-subcategorias',
  templateUrl: './subcategorias.page.html',
  styleUrls: ['./subcategorias.page.scss'],
})
export class SubcategoriasPage implements OnInit {

  constructor(private navController: NavController) { }

  ngOnInit() {
  }

  volver(){
    this.navController.navigateBack(['/main/inicio/mercado/categorias']);
  }

  seleccion(){
    this.navController.navigateForward(['/main/inicio/mercado/categorias/subcategorias/seleccion']);
  }
}
