import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CakeReviewComponent } from './cake-review.component';

describe('CakeReviewComponent', () => {
  let component: CakeReviewComponent;
  let fixture: ComponentFixture<CakeReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CakeReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CakeReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
