import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-bienvenido',
  templateUrl: './register3.page.html',
  styleUrls: ['./register3.page.scss'],
})
export class Register3Page implements OnInit {

  constructor(private navController: NavController) { }

  ngOnInit() {
  }

  continuar(){
    this.navController.navigateBack(['/login']);
  }
}
