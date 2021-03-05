import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentCreateFormComponent } from './content-create-form.component';

describe('ContentCreateFormComponent', () => {
  let component: ContentCreateFormComponent;
  let fixture: ComponentFixture<ContentCreateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentCreateFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentCreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
