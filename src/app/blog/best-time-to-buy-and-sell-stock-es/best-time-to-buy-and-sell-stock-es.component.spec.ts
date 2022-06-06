import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestTimeToBuyAndSellStockEsComponent } from './best-time-to-buy-and-sell-stock-es.component';

describe('BestTimeToBuyAndSellStockEsComponent', () => {
  let component: BestTimeToBuyAndSellStockEsComponent;
  let fixture: ComponentFixture<BestTimeToBuyAndSellStockEsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BestTimeToBuyAndSellStockEsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BestTimeToBuyAndSellStockEsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
