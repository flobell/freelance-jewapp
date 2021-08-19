import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable, from, of } from 'rxjs';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import * as CONST from './constants';
import { JsonData } from '../models/jsondata.interface';
import { TOKEN_KEY } from './constants';
import { Storage } from '@ionic/storage';
// import { environment } from './enviroment/enviroment';


// // Set the http options
 const httpOptions = {
    headers: new HttpHeaders({ 
     'Content-Type': 'application/x-www-form-urlencoded', 
     'Accept': 'application/json',
     'Access-Control-Allow-Origin':  '*',
     'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
     'Cache-Control': 'no-cache'
   }) 
 };

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //TODO: falta anexar header a consulta
  private headers;

/*   private httpOptions = {
    'Content-Type': 'application/json', 
    'Accept': 'application/json',
    'Authorization': "Bearer"+this.storage.get(TOKEN_KEY)
  } */


  constructor(
    private httpClient: HttpClient,
    private storage: Storage,
    //public toastController: ToastController
    //private spinnerDialog: SpinnerDialog,
    //private toast: Toast
  ) { 
    this.headers = new Headers();
    this.headers.append('Access-Control-Allow-Origin','*');
    this.headers.append('Access-Control-Allow-Methods','POST, GET, OPTIONS, PUT');
    this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
    this.headers.append('Cache-Control', 'no-cache');
  }

  /** 
  *@name login
  *@description Intenta autenticar el usuario segun sus parametros
  *@param user Usuario o correo
  *@param password Contraseña del usuario
  *@author Pedro Flores
  **/
  public login(email: string, password: string) {
    let data = { email: email, password: password };
    console.log('LOGIN DATA',data);


    return this.httpClient.post<JsonData>(CONST.URL_API_POST_LOGIN_USER, data,{headers: this.headers});
  }

  /** 
  *@name getAllCommunities
  *@description Obtiene todas las comunidades
  *@author Pedro Flores
  **/
  public getAllCommunities(): Observable<any> {
    return this.httpClient.get<JsonData>(CONST.URL_API_GET_ALL_COMMUNITIES).pipe(
      map( results => results.comunidades ),
      catchError( this.handleError('getAllCommunities()', []))
    );
  }

  /** 
  *@name getRegisterQuestions
  *@description Obtiene las preguntas para el registro de usuario
  *@author Pedro Flores
  **/
  public getRegisterQuestions(){
    return this.httpClient.get<JsonData>(CONST.URL_API_GET_REGISTER_QUESTIONS).pipe(
      map(results => results.preguntas),
      catchError( this.handleError('getAllCommunities()', []))
    );
    //return this.getRequest(CONST.URL_GET_REGISTER_QUESTIONS);
  }

  /** 
  *@name registerUser
  *@description Registra un usuario
  *@param data de registro del usuario
  *@author Pedro Flores
  **/
  public registerUser(data: any): Observable<any> {
    console.log('REGISTER DATA', data)
    return this.httpClient.post<JsonData>(CONST.URL_API_POST_REGISTER_USER, data);
  }



  /** 
  *@name getAllBusinessCategories
  *@description Obtiene todas las categorias de los negocios
  *@author Pedro Flores
  **/
  public getBusinessCategories(){

    // let token = localStorage.getItem(TOKEN_KEY);
    // console.log('getAllBusinessCategories()',token);
    // let headers = new HttpHeaders(
    //   { 
    //     // 'Access-Control-Allow-Origin': '*',
    //     // 'Content-Type': 'application/json',
    //     // 'Authorization': 'Bearer '+token
    //  }
    // );
    // let options = { headers };
    //console.log('TOKEN', localStorage.getItem(TOKEN_KEY));
    return this.httpClient.get<JsonData>(CONST.URL_API_GET_BUSINESS_CATEGORIES/*, options*/ )
    .pipe(
      map( results => results.data.category),
      catchError( this.handleError('getBusinessCategories()', []))
    );
  }

  public getBusinessSubcategories(id: string){
    let params = new HttpParams().set('id', id);
    return this.httpClient.get<JsonData>(CONST.URL_API_GET_BUSINESS_SUBCATEGORIES, { params })
    .pipe(
      map( results => results.data.subcategory),
      catchError( this.handleError('getBusinessSubcategories()', []))
    );
  }

  public getFindBusinessSubcategory(id: string){
    let params = new HttpParams().set('id', id);
    return this.httpClient.get<JsonData>(CONST.URL_API_GET_FIND_BUSINESS_SUBCATEGORY, { params })
    .pipe(
      map( results => results.data.subcategory),
      catchError( this.handleError('getFindBusinessSubcategory()', []))
    );
  }

  
  public getFilterBusiness(id: string){
    let params = new HttpParams().set('id', id);
    return this.httpClient.get<JsonData>(CONST.URL_API_GET_FILTER_BUSINESS, { params })
    .pipe(
      map( results => results.data.business),
      catchError( this.handleError('getFilterBusiness()', []))
    );
  }
  

  //Gestion de errores
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error('[apiService]', error['error']); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }


    /** 
  *@name createbusiness
  *@description Obtiene todas las categorias de los negocios
  *@author Alfredo Tochon
  **/
 public createbusiness(data){
  return this.httpClient.post<JsonData>(CONST.URL_API_GET_BUSINESS_CATEGORIES, data )
  .pipe(
    map( results => results.data.business),
    catchError( this.handleError('createbusiness()', []))
  );
}

}
