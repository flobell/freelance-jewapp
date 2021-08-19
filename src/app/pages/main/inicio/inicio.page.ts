import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { TOKEN_KEY } from 'src/app/services/constants';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(private navController: NavController) { 
    console.log('LOGIN TOKEN', localStorage.getItem(TOKEN_KEY));
  }

  ngOnInit() {
  }

  directorio(){
    this.navController.navigateForward(['/main/inicio/directorio']);
  }

  cartelera(){
    this.navController.navigateForward(['/main/inicio/cartelera']);
  }

  mercado(){
    this.navController.navigateForward(['/main/inicio/mercado']);
  }

  anuncios(){
    this.navController.navigateForward(['/main/inicio/anuncios']);
  }

}
