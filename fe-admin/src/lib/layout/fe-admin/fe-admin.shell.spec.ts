import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeAdminComponent } from './fe-admin.shell';

describe('FeAdminComponent', () => {
  let component: FeAdminComponent;
  let fixture: ComponentFixture<FeAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeAdminComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
