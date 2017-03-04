import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UppermenuComponent } from './uppermenu.component';

describe('UppermenuComponent', () => {
  let component: UppermenuComponent;
  let fixture: ComponentFixture<UppermenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UppermenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UppermenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
