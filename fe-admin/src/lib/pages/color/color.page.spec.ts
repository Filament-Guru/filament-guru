import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminColorPage } from './color.page';
import { provideHttpClient } from '@angular/common/http';

describe('AdminColorPage', () => {
  let component: AdminColorPage;
  let fixture: ComponentFixture<AdminColorPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminColorPage],
      providers: [provideHttpClient()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminColorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
