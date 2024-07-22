import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminUpdateColorDialog } from './admin-update-color.dialog';

describe('AdminUpdateColorDialogComponent', () => {
  let component: AdminUpdateColorDialog;
  let fixture: ComponentFixture<AdminUpdateColorDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminUpdateColorDialog],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminUpdateColorDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
