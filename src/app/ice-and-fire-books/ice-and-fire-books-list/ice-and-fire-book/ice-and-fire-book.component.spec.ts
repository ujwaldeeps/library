import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IceAndFireBookComponent } from './ice-and-fire-book.component';

describe('IceAndFireBookComponent', () => {
  let component: IceAndFireBookComponent;
  let fixture: ComponentFixture<IceAndFireBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IceAndFireBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IceAndFireBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
