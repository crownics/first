import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRetroComponent } from './new-retro.component';

describe('NewRetroComponent', () => {
  let component: NewRetroComponent;
  let fixture: ComponentFixture<NewRetroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewRetroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewRetroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
