import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  constructor(private navController: NavController) {

    //document.getElementById('ionTabs').style.display = 'none';
  }

  ngOnInit() {
    //document.getElementById('ionTabs').style.display = 'none';
  }

  volver(){
    this.navController.navigateBack(['/main/chats']);
  }

}
