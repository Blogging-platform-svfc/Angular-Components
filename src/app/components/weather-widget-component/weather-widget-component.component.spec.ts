import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherWidgetComponentComponent } from './weather-widget-component.component';

describe('WeatherWidgetComponentComponent', () => {
  let component: WeatherWidgetComponentComponent;
  let fixture: ComponentFixture<WeatherWidgetComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeatherWidgetComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatherWidgetComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
