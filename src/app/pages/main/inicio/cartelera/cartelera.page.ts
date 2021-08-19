import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cartelera',
  templateUrl: './cartelera.page.html',
  styleUrls: ['./cartelera.page.scss'],
})
export class CarteleraPage implements OnInit {

  constructor(private navController: NavController) { }

  ngOnInit() {
  }

  avanzado(){
    this.navController.navigateForward(['/main/inicio/cartelera/avanzado']);
  }

  seleccion(){
    this.navController.navigateForward(['/main/inicio/cartelera/seleccion']);
  }
}
