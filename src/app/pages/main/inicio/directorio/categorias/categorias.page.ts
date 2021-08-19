import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { Subcategory } from 'src/app/models/subcategory.interface';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.page.html',
  styleUrls: ['./categorias.page.scss'],
})
export class CategoriasPage implements OnInit {

  public subcategorias: Observable<Subcategory[]>;
  private idCategory: string;
  public nameCategory: string;

  constructor(
    private navController: NavController,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private apiService: ApiService,
    ) { }

  ngOnInit() { 
    this.idCategory = this.activatedRoute.snapshot.paramMap.get('id');
    this.nameCategory = this.activatedRoute.snapshot.paramMap.get('name');
    console.log('ID SUBCATEGORIA',this.idCategory);
    console.log('this.router.url', this.router.url);

    this.subcategorias = this.apiService.getBusinessSubcategories(this.idCategory);
/*     this.subcategorias.subscribe(
      (response) => {
        console.log('SUCCESS',response);
      },
      (error) => {
        console.log('SUCCESS',error);
      }
    ); */
  }

  volver(){
    this.navController.pop();
  }  

  seleccion(id: string, name: string){
    this.navController.navigateForward([this.router.url+'/seleccion/'+id+'/'+name]);
  }

}
