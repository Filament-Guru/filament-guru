import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminProducerPage } from './producer.page';
import { provideHttpClient } from '@angular/common/http';

describe('BrandComponent', () => {
  let component: AdminProducerPage;
  let fixture: ComponentFixture<AdminProducerPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminProducerPage],
      providers: [provideHttpClient()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminProducerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
