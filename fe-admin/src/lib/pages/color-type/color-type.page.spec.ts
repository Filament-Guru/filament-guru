import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminColorTypePage } from './color-type.page';
import { provideHttpClient } from '@angular/common/http';

describe('AdminColorTypePage', () => {
  let component: AdminColorTypePage;
  let fixture: ComponentFixture<AdminColorTypePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminColorTypePage],
      providers: [provideHttpClient()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminColorTypePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
