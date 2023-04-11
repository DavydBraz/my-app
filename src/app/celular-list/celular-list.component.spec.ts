import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CelularListComponent } from './celular-list.component';

describe('CelularListComponent', () => {
  let component: CelularListComponent;
  let fixture: ComponentFixture<CelularListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CelularListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CelularListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
