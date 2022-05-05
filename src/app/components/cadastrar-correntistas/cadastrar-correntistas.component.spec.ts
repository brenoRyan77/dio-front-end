import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarCorrentistasComponent } from './cadastrar-correntistas.component';

describe('CadastrarCorrentistasComponent', () => {
  let component: CadastrarCorrentistasComponent;
  let fixture: ComponentFixture<CadastrarCorrentistasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarCorrentistasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarCorrentistasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
