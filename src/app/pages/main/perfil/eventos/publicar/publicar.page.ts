import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-publicar',
  templateUrl: './publicar.page.html',
  styleUrls: ['./publicar.page.scss'],
})
export class PublicarPage implements OnInit {

  constructor(private navController: NavController) { }

  ngOnInit() {
  }

  volver(){
    this.navController.navigateBack('/main/perfil/eventos');
  }

  continuar(){
    this.navController.navigateForward(['/main/perfil/eventos/publicar/continuar']);
  }   
  

}
