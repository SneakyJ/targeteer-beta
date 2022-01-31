import { Component, OnInit, NgModule } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner';

import { BrowserModule } from '@angular/platform-browser'; 
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {

  constructor() { }

  color: ThemePalette = 'warn';
  mode: ProgressSpinnerMode = 'determinate';
  value: number = 80;
  val: string = '';

  ngOnInit(): void {
  }

}
