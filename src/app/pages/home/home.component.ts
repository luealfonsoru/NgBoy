import { Component, OnInit } from '@angular/core';
import { ScreenComponent } from '../../components/screen/screen.component';
import { CPUService } from '../../services/cpu.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ScreenComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.less'
})
export class HomeComponent implements OnInit {

  constructor(private cpuService: CPUService) {}
  ngOnInit(): void {
    this.cpuService.performInstruction(0x00, []).then(() => {
      this.cpuService.performInstruction(0x01, [0x00, 0xFF]).then(() => {
        this.cpuService.performInstruction(0x03, []).then(() => {});
      })
    });
  }
}
