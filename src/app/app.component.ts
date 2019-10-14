import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Icon } from 'ionicons/dist/types/icon/icon';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Inicio',
      url: '/home',
      icon: 'play'
    },
    {
      title: 'Home',
      url: '/teste-home',
      icon: 'home'
    }
    ,
    {
      title: 'Auto Avaliação',
      url: '/zung',
      icon: 'book'
    }
    ,
    {
      title: 'Sobre o App',
      url: '/sobre',
      icon: 'help'
    }
    


  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
