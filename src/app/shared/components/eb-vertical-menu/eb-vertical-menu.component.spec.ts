import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EbVerticalMenuComponent } from './eb-vertical-menu.component';

describe('EbVerticalMenuComponent', () => {
  let component: EbVerticalMenuComponent;
  let fixture: ComponentFixture<EbVerticalMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EbVerticalMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EbVerticalMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
