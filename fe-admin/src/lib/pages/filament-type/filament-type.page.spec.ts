import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminFilamentTypePage } from './filament-type.page';
import { provideHttpClient } from '@angular/common/http';

describe('AdminFilamentTypePage', () => {
  let component: AdminFilamentTypePage;
  let fixture: ComponentFixture<AdminFilamentTypePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminFilamentTypePage],
      providers: [provideHttpClient()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminFilamentTypePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
