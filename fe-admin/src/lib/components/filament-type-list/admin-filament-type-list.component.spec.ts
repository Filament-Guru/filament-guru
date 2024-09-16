import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminFilamentTypeListComponent } from './admin-filament-type-list.component';
import { provideHttpClient } from '@angular/common/http';

describe('AdminFilamentTypeListComponent', () => {
  let component: AdminFilamentTypeListComponent;
  let fixture: ComponentFixture<AdminFilamentTypeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminFilamentTypeListComponent],
      providers: [provideHttpClient()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminFilamentTypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
