import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IonicStorageModule } from '@ionic/storage';

import { AuthGuardService } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';

import { TabsService } from './services/tabs.service';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { HttpConfigInterceptor } from './services/http-config.interceptor';

import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { ImageService } from './services/image.service';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule, 
    IonicStorageModule.forRoot(),
    HttpClientModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    TabsService,
    AuthGuardService,
    AuthService,
    ImagePicker,
    ImageService,
    { 
      provide: RouteReuseStrategy, 
      useClass: IonicRouteStrategy },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpConfigInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
