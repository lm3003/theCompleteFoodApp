import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  loadedFeature = 'recipe';

  onNavigate(feature: string) {
    // console.log(feature + 'a');
    this.loadedFeature = feature;
  }

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyDiSL24BjEXT4NikIxGP_4iLNrPkKC06TU",
      authDomain: "ng-thecompletefoodapp.firebaseapp.com"
    });
  }


}
