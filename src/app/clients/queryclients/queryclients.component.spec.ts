import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryclientsComponent } from './queryclients.component';

fdescribe('QueryclientsComponent', () => {
  let component: QueryclientsComponent;
  let fixture: ComponentFixture<QueryclientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QueryclientsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QueryclientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
it('cuando se intenta consultar sin parametros', () => {
 

  expect(component.clients).not.toBeNull;
});
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
