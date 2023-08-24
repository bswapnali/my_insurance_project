import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manimenu',
  templateUrl: './main-menu-component.html',
})
export class MainMenuComponent implements OnInit {

  public isActive: any;
  showSubmenu: boolean = false;
  constructor() { }

  ngOnInit() {
  }

}
