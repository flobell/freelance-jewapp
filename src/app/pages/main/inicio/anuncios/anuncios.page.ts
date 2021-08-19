import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
 
@Component({
  selector: 'app-anuncios',
  templateUrl: './anuncios.page.html',
  styleUrls: ['./anuncios.page.scss'],
})
export class AnunciosPage implements OnInit {

  constructor(private navController: NavController) { }

  ngOnInit() {
  }

  producto(){
    this.navController.navigateForward(['/main/inicio/anuncios/producto']);
  }

}
