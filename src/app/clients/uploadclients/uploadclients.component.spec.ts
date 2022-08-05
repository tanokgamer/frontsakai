import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadclientsComponent } from './uploadclients.component';

describe('UploadclientsComponent', () => {
  let component: UploadclientsComponent;
  let fixture: ComponentFixture<UploadclientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadclientsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadclientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
