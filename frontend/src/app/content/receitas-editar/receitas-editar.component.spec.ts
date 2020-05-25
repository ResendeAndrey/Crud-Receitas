import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceitasEditarComponent } from './receitas-editar.component';

describe('ReceitasEditarComponent', () => {
  let component: ReceitasEditarComponent;
  let fixture: ComponentFixture<ReceitasEditarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceitasEditarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceitasEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
