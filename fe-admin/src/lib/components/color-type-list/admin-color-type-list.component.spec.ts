import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminColorTypeListComponent } from './admin-color-type-list.component';
import { provideHttpClient } from '@angular/common/http';

describe('AdminColorTypeListComponent', () => {
  let component: AdminColorTypeListComponent;
  let fixture: ComponentFixture<AdminColorTypeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminColorTypeListComponent],
      providers: [provideHttpClient()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminColorTypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
