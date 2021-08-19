import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse, HttpErrorResponse} from '@angular/common/http';
import { Observable, from, throwError } from 'rxjs';
import { map, catchError, switchMap  } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { TOKEN_KEY, SERVER_HOST } from './constants';
 
@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {

    loaderToShow: any;
    protected debug = true;
    
    constructor(
        public loadingController: LoadingController,
        private storage: Storage
    ) { }

 
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
        console.log('REQUEST URL',request.url);

        // return from(this.storage.get(TOKEN_KEY))
        // .pipe(
        //     switchMap(
        //         token => {
        //             //Authentication by setting header with token value
        //             // if (token) {
        //             //     console.log('AUTHORIZATION TOKEN', token);
        //             //     request = request.clone({ 
        //             //         setHeaders: { 
        //             //             'Authorization': 'Bearer '+token,
        //             //         } 
        //             //     });
        //             // }

        //             if (!request.headers.has('Content-Type')) {
        //                 request = request.clone({ setHeaders: { 'content-type': 'application/json' } } );
        //             }
                
        //             request = request.clone(
        //                 { headers: request.headers.set('Accept', '*/*') }
        //             );
            
        //             console.log('[httpClient] Headers', request.headers);
                    
        //             this.showLoader();
            
        //             return next.handle(request).pipe(
        //                 map(
        //                     (event: HttpEvent<any>) => {
        //                         if (event instanceof HttpResponse) {
        //                             console.log('[httpClient] Success', event);
        //                         }
        //                         this.hideLoader();
        //                         return event;
        //                     }
        //                 ),
        //                 catchError(
        //                     (error: HttpErrorResponse) => {
        //                         console.log('[httpClient] Error', error);
        //                         this.hideLoader();
        //                         return throwError(error);
        //                     }
        //                 )
        //             );
        //         }
        //     )
        // );      

        // Authentication by setting header with token value
        // let token = localStorage.getItem(TOKEN_KEY);
        // if (token) {
        //     console.log('INTERCEPTOR TOKEN', token);
        //     request = request.clone({ setHeaders: { 'Authorization': 'Bearer '+token } });
        // }

       // if (!request.headers.has('Content-Type')) { 
            //request = request.clone({ setHeaders: { 'content-type': 'application/json' } }); 
       // }
    
      //  request = request.clone({ headers: request.headers.set('Accept', '*/*') });
/*       request = request.clone({ setHeaders: {      
        'Content-Type': 'application/x-www-form-urlencoded', 
        'Accept': 'application/json',
        'Access-Control-Allow-Origin':  '*',
        'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
        'Cache-Control': 'no-cache' } }); 
        console.log('[httpClient] Headers', request.headers); */

        this.showLoader();

        return next.handle(request).pipe(
            map(
                (event: HttpEvent<any>) => {
                    if (event instanceof HttpResponse) {
                        console.log('[httpClient] Success', event);
                    }
                    this.hideLoader();
                    return event;
                }
            ),
            catchError(
                (error: HttpErrorResponse) => {
                    console.log('[httpClient] Error', error);
                    this.hideLoader();
                    return throwError(error);
                }
            )
        );

    }
 

    private showLoader() {
        this.loaderToShow = this.loadingController.create(
            {
                message: 'Cargando',
                spinner: 'lines'
            }
        ).then( (success) =>  success.present() );
        this.hideLoader();
    }
    
    private hideLoader() {
        this.loadingController.dismiss().then(
            (success) => { if(!success) this.loadingController.dismiss(); },
            (error) => {  this.loadingController.dismiss(); return }
        );
    }
 
}
 