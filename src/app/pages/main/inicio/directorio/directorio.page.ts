import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { Category } from 'src/app/models/category.interface';

@Component({
  selector: 'app-directorio',
  templateUrl: './directorio.page.html',
  styleUrls: ['./directorio.page.scss'],
})
export class DirectorioPage implements OnInit {

  public categorias: Observable<Category[]>;

  constructor(
    private navController: NavController,
    private router: Router,
    private apiService: ApiService  
  ) { }

  ngOnInit() { 
    this.categorias = this.apiService.getBusinessCategories();
   /* this.categorias.subscribe(
      (response) => {
        console.log('CATEGORIAS', response);
      },
      (error) => {
        console.log('ERROR CATEGORIAS', error);
      }
    );*/
  }

  avanzado(){
    this.navController.navigateForward(['/main/inicio/directorio/avanzado']);
  }

  goToCategoria(id: string, name: string){
    // console.log('ID CATEGORIA', id);
    this.navController.navigateForward([this.router.url+'/categorias/'+id+'/'+name]);
  }
}
