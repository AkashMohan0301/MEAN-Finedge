import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValiationComponent } from './valiation.component';

describe('ValiationComponent', () => {
  let component: ValiationComponent;
  let fixture: ComponentFixture<ValiationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValiationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValiationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
