import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminCreateColorDialog } from './admin-create-color.dialog';

describe('AdminCreateColorDialogComponent', () => {
  let component: AdminCreateColorDialog;
  let fixture: ComponentFixture<AdminCreateColorDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminCreateColorDialog],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminCreateColorDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
