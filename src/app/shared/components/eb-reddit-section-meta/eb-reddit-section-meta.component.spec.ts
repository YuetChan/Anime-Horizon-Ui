import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EbRedditSectionMetaComponent } from './eb-reddit-section-meta.component';

describe('EbRedditSectionMetaComponent', () => {
  let component: EbRedditSectionMetaComponent;
  let fixture: ComponentFixture<EbRedditSectionMetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EbRedditSectionMetaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EbRedditSectionMetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
