import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiChipComponent } from './pi-chip.component';

describe('PiChipComponent', () => {
  let component: PiChipComponent;
  let fixture: ComponentFixture<PiChipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PiChipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PiChipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
