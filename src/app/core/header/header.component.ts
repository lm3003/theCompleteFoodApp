import {Component, OnChanges, OnInit} from '@angular/core';

import {DataStorage} from '../../shared/data-storage.service';
import {Response} from '@angular/http';
import {AuthService} from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit  {

  constructor(private dataStorageService: DataStorage,
               private authService: AuthService) { }

  ngOnInit() {

  }

  onSaveData() {
    this.dataStorageService.saveData()
      .subscribe(
        (response: Response) => console.log(response)
      );
  }


  onFetchData() {
    this.dataStorageService.fetchData();
  }

  isAuth() {
    return this.authService.isAuthenticated();
  }
//
  onLogout() {
    this.authService.logout();
  }


}
