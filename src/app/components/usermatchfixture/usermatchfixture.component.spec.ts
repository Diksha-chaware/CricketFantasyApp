import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsermatchfixtureComponent } from './usermatchfixture.component';

describe('UsermatchfixtureComponent', () => {
  let component: UsermatchfixtureComponent;
  let fixture: ComponentFixture<UsermatchfixtureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsermatchfixtureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsermatchfixtureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
