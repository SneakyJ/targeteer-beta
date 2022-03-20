import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor() { }
  
  menuItems: string[] = [ 
    'Goals', 
    'Set Goal',
    'Profile'];

  ngOnInit(): void {
  }

}
