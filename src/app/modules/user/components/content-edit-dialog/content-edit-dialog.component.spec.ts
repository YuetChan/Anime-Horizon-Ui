import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentEditDialogComponent } from './content-edit-dialog.component';

describe('ContentEditDialogComponent', () => {
  let component: ContentEditDialogComponent;
  let fixture: ComponentFixture<ContentEditDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentEditDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
