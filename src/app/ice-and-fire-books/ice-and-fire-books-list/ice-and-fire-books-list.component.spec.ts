import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IceAndFireBooksListComponent } from './ice-and-fire-books-list.component';

describe('IceAndFireBooksListComponent', () => {
  let component: IceAndFireBooksListComponent;
  let fixture: ComponentFixture<IceAndFireBooksListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IceAndFireBooksListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IceAndFireBooksListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
