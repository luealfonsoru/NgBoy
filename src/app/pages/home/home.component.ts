import { Component } from '@angular/core';
import { ScreenComponent } from '../../components/screen/screen.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ScreenComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.less'
})
export class HomeComponent {

}
