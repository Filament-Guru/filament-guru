import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeAdminShell } from './fe-admin.shell';

describe('FeAdminShell', () => {
  let component: FeAdminShell;
  let fixture: ComponentFixture<FeAdminShell>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeAdminShell],
    }).compileComponents();

    fixture = TestBed.createComponent(FeAdminShell);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
