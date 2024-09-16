import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminDialogShell } from './admin-dialog.shell';
import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';

describe('AdminDialogShell', () => {
  let component: AdminDialogShell;
  let fixture: ComponentFixture<AdminDialogShell>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminDialogShell],
      providers: [
        {
          provide: DialogRef,
          useValue: {}
        },
        {
          provide: DIALOG_DATA,
          useValue: { title: 'Test Title' }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminDialogShell);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
