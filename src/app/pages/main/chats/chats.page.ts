import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.page.html',
  styleUrls: ['./chats.page.scss'],
})
export class ChatsPage implements OnInit {

  constructor(private navController: NavController) { }

  ngOnInit() {
  }

  chat(){
    this.navController.navigateForward(['/main/chats/chat']);
  }

}
