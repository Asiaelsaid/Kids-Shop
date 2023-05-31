import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsertemplateformComponent } from './usertemplateform.component';

describe('UsertemplateformComponent', () => {
  let component: UsertemplateformComponent;
  let fixture: ComponentFixture<UsertemplateformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsertemplateformComponent]
    });
    fixture = TestBed.createComponent(UsertemplateformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
