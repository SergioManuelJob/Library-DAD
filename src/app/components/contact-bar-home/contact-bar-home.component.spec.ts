import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactBarHomeComponent } from './contact-bar-home.component';

describe('ContactBarHomeComponent', () => {
  let component: ContactBarHomeComponent;
  let fixture: ComponentFixture<ContactBarHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactBarHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactBarHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
