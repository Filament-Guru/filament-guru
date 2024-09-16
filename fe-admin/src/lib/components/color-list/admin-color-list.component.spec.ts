import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminColorListComponent } from './admin-color-list.component';
import { provideHttpClient } from '@angular/common/http';

describe('AdminColorListComponent', () => {
  let component: AdminColorListComponent;
  let fixture: ComponentFixture<AdminColorListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminColorListComponent],
      providers: [provideHttpClient()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminColorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
