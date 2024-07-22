import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminColorTypeListComponent } from './admin-color-type-list.component';

describe('AdminColorTypeListComponent', () => {
  let component: AdminColorTypeListComponent;
  let fixture: ComponentFixture<AdminColorTypeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminColorTypeListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminColorTypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
