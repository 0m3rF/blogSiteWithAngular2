import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EasyPointComponent } from './easypoint.component';

describe('EasyPointComponent', () => {
  let component: EasyPointComponent;
  let fixture: ComponentFixture<EasyPointComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EasyPointComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EasyPointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
