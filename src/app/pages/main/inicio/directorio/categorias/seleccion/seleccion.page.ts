import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { Business } from 'src/app/models/business.interface';


@Component({
  selector: 'app-seleccion',
  templateUrl: './seleccion.page.html',
  styleUrls: ['./seleccion.page.scss'],
})
export class SeleccionPage implements OnInit {

  private seleccionId: string;
  public seleccionName: string;
  public negocios: Observable<Business[]>

  constructor(
    private navController: NavController,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private apiService: ApiService
    ) { }

  ngOnInit() {
    this.seleccionId = this.activatedRoute.snapshot.paramMap.get('id');
    this.seleccionName = this.activatedRoute.snapshot.paramMap.get('name');
    // console.log('ID seleccion',this.seleccionId);
    
    this.negocios = this.apiService.getFilterBusiness(this.seleccionId);

  }

  volver(){
    this.navController.pop();
  }

  local(id: string){
    this.navController.navigateForward([this.router.url+'/local/'+id]);
  }
}
