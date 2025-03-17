import { Component } from '@angular/core';
import { ScreenLineComponent } from './screen-line/screen-line.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-screen',
  standalone: true,
  imports: [ScreenLineComponent, NgFor],
  templateUrl: './screen.component.html',
  styleUrl: './screen.component.less'
})
export class ScreenComponent {
  resolution = [160, 144]
}
