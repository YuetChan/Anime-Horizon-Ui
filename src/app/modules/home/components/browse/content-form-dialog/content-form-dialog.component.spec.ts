import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentFormDialogComponent } from './content-form-dialog.component';

describe('ContentFormDialogComponent', () => {
  let component: ContentFormDialogComponent;
  let fixture: ComponentFixture<ContentFormDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentFormDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentFormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
