import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminCreateFlavorGroupDialog } from './admin-create-flavor-group.dialog';

describe('AdminCreateFlavorGroupDialogComponent', () => {
  let component: AdminCreateFlavorGroupDialog;
  let fixture: ComponentFixture<AdminCreateFlavorGroupDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminCreateFlavorGroupDialog],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminCreateFlavorGroupDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
