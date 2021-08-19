import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-avanzado',
  templateUrl: './avanzado.page.html',
  styleUrls: ['./avanzado.page.scss'],
})
export class AvanzadoPage implements OnInit {

  constructor(private navController: NavController) { }

  ngOnInit() {
  }

  volver(){
    this.navController.navigateBack(['/main/inicio/cartelera']);
  }

}
