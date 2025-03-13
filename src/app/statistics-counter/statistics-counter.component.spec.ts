import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticsCounterComponent } from './statistics-counter.component';

describe('StatisticsCounterComponent', () => {
  let component: StatisticsCounterComponent;
  let fixture: ComponentFixture<StatisticsCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatisticsCounterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StatisticsCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
