import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appDropDown]'
})
export class DropdownDirective {
  @HostBinding('class.open') openMenu = false;

  @HostListener('click') openToggle(){
    this.openMenu = !this.openMenu;
  }

  constructor() { }


}
