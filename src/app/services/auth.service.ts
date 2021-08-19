import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ToastController} from '@ionic/angular';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { TOKEN_KEY } from './constants';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url: string = '';
  public authState = new BehaviorSubject(false);

  constructor(
    private router: Router,
    private storage: Storage,
    public toastController: ToastController,
  ){
    this.ifLoggedIn();
  }

  ifLoggedIn() {
    this.storage.get(TOKEN_KEY).then((response) => {
      if (response) {
        this.authState.next(true);
      }
    });
  }
 
  login(token: string) {
    localStorage.setItem(TOKEN_KEY, token);
    this.storage.set(TOKEN_KEY, token).then((response) => {
      this.router.navigate(['main']);
      this.authState.next(true);
    });
  }
  
  logout() {
    localStorage.removeItem(TOKEN_KEY);
    this.storage.remove(TOKEN_KEY).then(() => {
      this.router.navigate(['login']);
      this.authState.next(false);
    });
  }
 
  isAuthenticated() {
    return this.authState.value;
  }

}
