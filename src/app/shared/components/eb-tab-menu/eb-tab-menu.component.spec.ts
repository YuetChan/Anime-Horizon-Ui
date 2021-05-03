import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EbTabMenuComponent } from './eb-tab-menu.component';

describe('EbTabMenuComponent', () => {
  let component: EbTabMenuComponent;
  let fixture: ComponentFixture<EbTabMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EbTabMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EbTabMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
