import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLyricComponent } from './create-lyric.component';

describe('CreateLyricComponent', () => {
  let component: CreateLyricComponent;
  let fixture: ComponentFixture<CreateLyricComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateLyricComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateLyricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
