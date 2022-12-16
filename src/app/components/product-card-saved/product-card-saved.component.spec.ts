import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCardSavedComponent } from './product-card-saved.component';

describe('ProductCardSavedComponent', () => {
  let component: ProductCardSavedComponent;
  let fixture: ComponentFixture<ProductCardSavedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductCardSavedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductCardSavedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
