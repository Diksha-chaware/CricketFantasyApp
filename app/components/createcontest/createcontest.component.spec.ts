import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatecontestComponent } from './createcontest.component';

describe('CreatecontestComponent', () => {
  let component: CreatecontestComponent;
  let fixture: ComponentFixture<CreatecontestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatecontestComponent]
    });
    fixture = TestBed.createComponent(CreatecontestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
