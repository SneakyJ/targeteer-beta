import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor() { }

  // menuItems: any[] = [
  //   {"name":'Menu item 1'}, {"name":'Menu item 2'}, {"name":'Menu item 3'}];

  menuItems: string[] = [
    'item0', 
    'item1', 
    'item2', 
    'item3'];

  ngOnInit(): void {
  }

}
