import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-mercado',
  templateUrl: './mercado.page.html',
  styleUrls: ['./mercado.page.scss'],
})
export class MercadoPage implements OnInit {

  constructor(private navController: NavController) { }

  ngOnInit() {
  }

  categorias(){
    this.navController.navigateForward(['/main/inicio/mercado/categorias']);
  }

  avanzado(){}

  seleccion(){}

}
