import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenLineComponent } from './screen-line.component';

describe('ScreenLineComponent', () => {
  let component: ScreenLineComponent;
  let fixture: ComponentFixture<ScreenLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScreenLineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScreenLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
