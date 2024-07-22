import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminDialogShell } from './admin-dialog.shell';

describe('AdminDialogShell', () => {
  let component: AdminDialogShell;
  let fixture: ComponentFixture<AdminDialogShell>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminDialogShell],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminDialogShell);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
