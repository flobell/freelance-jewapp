import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-continuar',
  templateUrl: './continuar.page.html',
  styleUrls: ['./continuar.page.scss'],
})
export class ContinuarPage implements OnInit {

  public adicional = false;

  constructor(private navController: NavController) { }

  ngOnInit() {
  }

  volver(){
    this.navController.navigateBack('/main/perfil/productos/publicar');
  }

  publicar(){}
}
