import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentBrowseComponent } from './content-browse.component';

describe('ContentBrowseComponent', () => {
  let component: ContentBrowseComponent;
  let fixture: ComponentFixture<ContentBrowseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentBrowseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentBrowseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
