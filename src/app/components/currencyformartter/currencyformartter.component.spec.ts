import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyformartterComponent } from './currencyformartter.component';

describe('CurrencyformartterComponent', () => {
  let component: CurrencyformartterComponent;
  let fixture: ComponentFixture<CurrencyformartterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrencyformartterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrencyformartterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
