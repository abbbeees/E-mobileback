import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdfilterComponent } from './prodfilter.component';

describe('ProdfilterComponent', () => {
  let component: ProdfilterComponent;
  let fixture: ComponentFixture<ProdfilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProdfilterComponent]
    });
    fixture = TestBed.createComponent(ProdfilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
