import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiTagPanelComponent } from './pi-tag-panel.component';

describe('PiTagPanelComponent', () => {
  let component: PiTagPanelComponent;
  let fixture: ComponentFixture<PiTagPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PiTagPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PiTagPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
