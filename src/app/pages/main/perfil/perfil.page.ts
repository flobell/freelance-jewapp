import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  constructor(private navController: NavController) { }

  ngOnInit() {
  }

  editar(){
    this.navController.navigateForward(['/main/perfil/editar']);
  }

  misNegocios(){
    this.navController.navigateForward(['/main/perfil/negocios']);
  }

  misEventos(){
    this.navController.navigateForward(['/main/perfil/eventos']);
  }

  misProductos(){
    this.navController.navigateForward(['/main/perfil/productos']);
  }

  misAnuncios(){
    this.navController.navigateForward(['/main/perfil/anuncios']);
  }
}
