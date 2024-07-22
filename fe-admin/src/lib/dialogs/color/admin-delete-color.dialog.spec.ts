import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminDeleteColorDialog } from './admin-delete-color.dialog';

describe('AdminDeleteColorDialogComponent', () => {
  let component: AdminDeleteColorDialog;
  let fixture: ComponentFixture<AdminDeleteColorDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminDeleteColorDialog],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminDeleteColorDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
