import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentMetaComponent } from './content-meta.component';

describe('ContentMetaComponent', () => {
  let component: ContentMetaComponent;
  let fixture: ComponentFixture<ContentMetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentMetaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentMetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
