import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestTimeToBuyAndSellStockComponent } from './best-time-to-buy-and-sell-stock.component';

describe('BestTimeToBuyAndSellStockComponent', () => {
  let component: BestTimeToBuyAndSellStockComponent;
  let fixture: ComponentFixture<BestTimeToBuyAndSellStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BestTimeToBuyAndSellStockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BestTimeToBuyAndSellStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
