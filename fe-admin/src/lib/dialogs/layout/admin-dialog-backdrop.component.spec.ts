import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminDialogBackdropComponent } from './admin-dialog-backdrop.component';
import { DialogConfig } from '@angular/cdk/dialog';
import { OverlayRef } from '@angular/cdk/overlay';

describe('AdminDialogBackdropComponent', () => {
  let component: AdminDialogBackdropComponent;
  let fixture: ComponentFixture<AdminDialogBackdropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminDialogBackdropComponent],
      providers: [
        {
          provide: DialogConfig,
          useValue: {}
        },
        {
          provide: OverlayRef,
          useValue: {}
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminDialogBackdropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
