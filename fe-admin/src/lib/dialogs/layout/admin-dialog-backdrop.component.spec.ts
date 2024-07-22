import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminDialogBackdropComponent } from './admin-dialog-backdrop.component';

describe('AdminDialogBackdropComponent', () => {
  let component: AdminDialogBackdropComponent;
  let fixture: ComponentFixture<AdminDialogBackdropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminDialogBackdropComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminDialogBackdropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
