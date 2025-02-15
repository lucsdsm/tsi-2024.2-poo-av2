import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunoListaComponent } from './aluno-lista.component';

describe('AlunoListaComponent', () => {
  let component: AlunoListaComponent;
  let fixture: ComponentFixture<AlunoListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlunoListaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlunoListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
