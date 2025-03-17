import { Component, Input } from '@angular/core';
import { PixelComponent } from "../pixel/pixel.component";
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-screen-line',
  standalone: true,
  imports: [PixelComponent, NgFor],
  templateUrl: './screen-line.component.html',
  styleUrl: './screen-line.component.less'
})
export class ScreenLineComponent {
  @Input() screenWidth = 0;
}
