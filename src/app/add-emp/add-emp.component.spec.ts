import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ColorOneComponent } from '../test/color-one/color-one.component';
import { ColorTwoComponent } from '../test/color-two/color-two.component';
import { ColorThreeComponent } from '../test/color-three/color-three.component';

import { AddEmpComponent } from './add-emp.component';
import { FormGroup } from '@angular/forms';
import { AppComponent } from '../app.component';
import { TestComponent } from '../test/test.component';

describe('AddEmpComponent', () => {
  let component: AddEmpComponent;
  let fixture: ComponentFixture<AddEmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        TestComponent,
        AddEmpComponent,
        ColorOneComponent,
        ColorTwoComponent,
        ColorThreeComponent,
      ],
      imports: [FormGroup, ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
