import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() feature = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onSelect(featureSelected: string) {
    this.feature.emit(featureSelected);
  }


}
