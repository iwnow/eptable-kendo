import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpTableComponent } from './ep-table.component';

describe('EpTableComponent', () => {
  let component: EpTableComponent;
  let fixture: ComponentFixture<EpTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
