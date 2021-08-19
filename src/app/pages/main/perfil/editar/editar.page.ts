import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from './../../../../services/auth.service';


@Component({
  selector: 'app-editar',
  templateUrl: './editar.page.html',
  styleUrls: ['./editar.page.scss'],
})
export class EditarPage implements OnInit {

  constructor(
    private navController: NavController,
    private authService: AuthService
    ) { }

  ngOnInit() {
  }

  volver(){
    this.navController.navigateBack(['/main/perfil']);
  }

  logout(){
    this.authService.logout();
  }
}
